import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";
import { weekPlans } from "./data/week-plans";
import { users } from "./data/users";

const toWeekId = (d: Date) => {
  return d.toISOString().slice(0, 10);
};

const init = async () => {
  if (!process.env.FIRESTORE_EMULATOR_HOST) {
    throw new Error(
      "FIRESTORE_EMULATOR_HOST is not set. Refusing to seed non-emulator Firestore.",
    );
  }

  initializeApp({
    projectId: "local",
  });

  const db = getFirestore();

  // ------- Users --------
  const usersColRef = db.collection("users");

  const userBatch = db.batch();

  users.forEach((u) => {
    const userDocRef = usersColRef.doc(u.id);
    userBatch.set(userDocRef, {
      name: u.name,
      created_at: u.created_at,
    });
  });

  await userBatch.commit();

  // ------- Week Plans --------
  const weekBatch = db.batch();

  users.forEach((u) => {
    const weekPlansColRef = usersColRef.doc(u.id).collection("week_plans");

    weekPlans.forEach((wp) => {
      const weekId = toWeekId(wp.week_start);
      const weekDocRef = weekPlansColRef.doc(weekId);

      weekBatch.set(weekDocRef, {
        week_start: wp.week_start,
        week_plan: wp.week_plan,
        created_at: wp.created_at,
        updated_at: wp.updated_at,
      });
    });
  });

  await weekBatch.commit();
};

(async () => {
  try {
    await init();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
