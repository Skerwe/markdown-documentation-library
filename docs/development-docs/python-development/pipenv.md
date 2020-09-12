# Pipenv

:link: [Pipenv](https://pipenv.pypa.io/en/latest/)

## Using Pipenv

### Install Pipenv

```shell
pip install --user pipenv
```

### Installing packages

```shell
cd project_folder
pipenv install packages_name
```

### Using installed packages

```shell
pipenv run python main.py
```

Start a virtual environment (shell) for project

```shell
pipenv shell
```

Deactivate the virtual environment

```shell
exit
```

## Managing Application Dependencies

:link: Manage dependencies with [Pipenv](https://packaging.python.org/tutorials/managing-dependencies/)

***

## Configure System variable

`PIPENV_VENV_IN_PROJECT=1`
