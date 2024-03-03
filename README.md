## Create package.json, root level of mono-repo

`pnpm init`

## Initialize git

```
touch .gitignore
git init
```

## Setup apps and packages dir

```
mkdir apps
mkdir packages
```

## Create workspace

`touch pnpm-workspace.yaml`

## Setting up micro-frontend apps

```
cd apps
pnpx create-mf-app
cd home
pnpm install
```

## Creating a ui package

```
cd packages
mkdir ui
pnpmm init
pnpm add react //adding depencencies
pnpm add typescript -D //adding depencencies
```

## Running everything from the root

```
pnpm --filter home start
pnpm run -r build
pnpm run --parallel -r build
```

## Installing Nx

`pnpm add nx -D -w`

## Running tasks with Nx

`npx nx <target> <porject>`
Example:

```
npx nx build ui
npx nx build home
```

## Monorepo workspace visualization :

`npx nx graph`
