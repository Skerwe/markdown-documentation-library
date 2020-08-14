# A successful Git branching model

:link: [Article](https://nvie.com/posts/a-successful-git-branching-model/) By Vincent Driessen

## Develop Branch

```shell
git checkout -b develop master
```

## Feature Branches

### Creating a feature branch

```shell
git checkout -b myfeature develop
```

### Incorporating a finished feature on develop

```shell
git checkout develop
git merge --no-ff myfeature
git branch -d myfeature
git push origin develop
```

## Release Branches

### Creating a release branch

```shell
git checkout -b release-1.2 develop
./bump-version.sh 1.2
git commit -a -m "Bumped version number to 1.2"
```

### Finishing a release branch

```shell
git checkout master
git merge --no-ff release-1.2
git tag -a 1.2
git push origin master
git checkout develop
git merge --no-ff release-1.2
git branch -d release-1.2
```

## Hotfix branches

### Creating the Hotfix Branch

```shell
git checkout -b hotfix-1.2.1 master
./bump-version.sh 1.2.1
git commit -a -m "Bumped version number to 1.2.1"
git commit -m "Fixed severe production problem"
```

### Finishing a hotfix branch

```shell
git checkout master
git merge --no-ff hotfix-1.2.1
git tag -a v1.2.1
git checkout develop
git merge --no-ff hotfix-1.2.1
git branch -d hotfix-1.2.1
```

## Tags

:link: [Git-Basics: Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

### Push tag to remote origin

```shell
git push origin <tagname>
```

### Delete tag locally

```shell
git tag -d <tagname>
```

### Delete tag on remote origin

```shell
git push origin --delete <tagname>
```
