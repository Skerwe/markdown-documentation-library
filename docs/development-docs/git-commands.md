# Git Command

## Learn Git

1. [Learn Git with Bitbucket Cloud | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
2. [Git Handbook · GitHub Guides](https://guides.github.com/introduction/git-handbook/)

## 1. The Basics of Git

### Initialise

Initialise an empty git tepository:  
`git init`

View current status of the repository:  
`git status`

### Track

Adding files to be tracked or stage files:  
`git add <file-name> [<file-name> ...]`

Stage all tracked files:  
`git add -u`

### Commit

Commit staged files:  
`git commit -m "message"`

Commit all staged files:  
`git commit -a`

### History

Show the commit history of the repository:  
`git log --all --graph --decorate --oneline`  
`git log --follow <file-name>`  
`git shortlog`  
`git log --author='Alexey'`  
`git log --grep='redirect'`

The git show command lists information about a commit:  
`git show <hash-value>`  
`git blame <my-file>`

### Checking Differences

Check differences between working directory and last commit:  
`git diff`

Check differences between specific files:  
`git diff [<file1-name> <file2-name>]`

Differences between exact points in history:  
`git diff <original>..<modified>`

### Amending Errors in the Git Workflow

Override the last commit of the branch:  
`git commit --amend -m "message"`

Revert changes to a file:  
`git checkout <file-name>`

Undo add:  
`git rm --cached <file-name>`  
`git rm --cached <folder-name> -r`

Undo stage of a tracked file:  
`git reset HEAD <file-name>`

Undo commit:  
`git reset [--soft | --hard | --mixed] HEAD~`

- **soft** resets only head
- **hard** resets working directory and head

Go back one commit:

```shell
git revert HEAD~1
git push origin master
```

Forces the push on the remote origin:

```shell
git reset --hard HEAD~2
git push -f origin master
```

## 2. Branching

Create a branch:  
`git branch <branch-name>`

Change to branch:  
`git checkout <branch-name>`

Create and change to branch:  
`git checkout -b <branch-name>`

Merge a branch:  
`git merge <branch-name>`  
`git merge --no-ff <branch-name> -m "message"`

Rename branch:  
`git branch -m <new-name>`

Delete a branch:  
`git branch -D <branch-name>`

Force delete a branch:  
`git branch -d <branch-name>`

Deleting remote branches:  
`git push origin --delete <branch-name>`

Check current branch:  
`git branch [-a]`

### Conflictive merges

Apply merge directly:  
`git merge -X <ours|theirs> <branch-name>`

Abort a merge with conflicts:  
`git merge --abort`

## 3. Tags

Note: tag names cannot be repeated

Create a tag:  
`git tag -a <tag-name> -m "message"`

Delete a tag:  
`git tag -d <tag-name>`

## 4. Remote Repositories

Add a remote repository:  
`git remote add <remote-name> <repository-url>`  
`git remote add origin <repository-url>`

Clone a remote repository:  
`git clone <repository-url> [new-local-name]`

Check remote locations:  
`git remote`  
`git remote -v` (show URL for each connection)

Show remote branches:  
`git branch -r`

Updating remote references (2 steps):

```shell
git fetch origin master
git merge origin/master
```

Fetch every branch:  
`git fetch --all`

Combine fetching and merging:  
`git pull origin master [ --no-ff]`

Deleting commits on remote:  
`git push origin HEAD~2:master --force`

Deleting branches on remote:  
`git push origin :<branch-name>`

Deleting tags on remote:  
`git push origin --tags :<tag-name>`

Remove connection:  
`git remote rm <name>`

Rename connection:  
`git remote rename <old-name> <new-name>`

### Push

Push to remote master (upstream):  
`git push [remote-name] [branch-name | --all] [--tags]`  
`git push origin <source>:<destination>`

*Note:* The --all flag means all the branches.

```shell
git push -u origin master
```

## 5. Patches

Creating patches:  
`git diff <expression> > <patch-name>.patch`

Applying patches:  
`git apply <patch-file> [--verbose] [--ignore-space-change] [--ignore-whitespace]`

## 6. Config

Configure global properties:

```shell
git config --global user.name "User Name"
git config --global user.email "user.name@gmail.com"
git config --global color.ui "auto"
```

List the current configuration:  
`git config --list [--global]`

Check version info:  
`git --version`
