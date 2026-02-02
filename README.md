# Recipe

## Firebase Local Emulator Suite

### Set up

.env.local

```shell
export FIRESTORE_EMULATOR_HOST="127.0.0.1:8080"
export GCLOUD_PROJECT="local"
```

### Start Emulators

```shell
npm run emulators
```

### Initialize Firestore Emulator

```shell
npm run emulators:seed
```
