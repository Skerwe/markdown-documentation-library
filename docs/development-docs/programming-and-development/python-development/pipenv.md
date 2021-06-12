# Pipenv

:link: [Pipenv](https://pipenv.pypa.io/en/latest/)  
:link: [Pipenv: A Guide to the New Python Packaging Tool](https://realpython.com/pipenv-guide/)

## Using Pipenv

### Install Pipenv

```shell
pip install --user pipenv
```

### Pipenv Workflow

#### 1. Start a virtual environment (shell) for project

```shell
pipenv shell
```

#### 2. Add a package to the project

```shell
pipenv install packages_name
pipenv install packages_name --dev
```

#### 3. Create lock file

```shell
pipenv lock
```

```shell
pip freeze --local > requirements.txt
pip install -r requirements.txt
```

#### 4. Install using the lock file

For production dependencies:

```shell
pipenv install --ignore-pipfile
```

For development:

```shell
pipenv install --dev
```

#### 5. Deactivate the virtual environment

```shell
exit
```

### Using an Installed packages outside the shell

```shell
pipenv run python main.py
```

***

## Configure System variable

`PIPENV_VENV_IN_PROJECT=1`

### Linux Systems

`export PIPENV_VENV_IN_PROJECT=1` (add this line in .profile)
