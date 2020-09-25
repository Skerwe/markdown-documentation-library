# Pipenv

:link: [Pipenv](https://pipenv.pypa.io/en/latest/)

## Using Pipenv

### Install Pipenv

```shell
pip install --user pipenv
```

### Pipenv Workflow

#### Install from Pipfile

```shell
pipenv install packages_name
```

#### Add a package to the project

```shell
pipenv install packages_name
```

#### Start a virtual environment (shell) for project

```shell
pipenv shell
```

#### Deactivate the virtual environment

```shell
exit
```

### Using an Installed packages outside the shell

```shell
pipenv run python main.py
```

## Managing Application Dependencies

:link: Manage dependencies with [Pipenv](https://packaging.python.org/tutorials/managing-dependencies/)

***

## Configure System variable

`PIPENV_VENV_IN_PROJECT=1`
