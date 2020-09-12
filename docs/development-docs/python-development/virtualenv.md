# Virtualenv

:link: [Virtualenv](https://virtualenv.pypa.io/en/stable/)  
:link: [Virtualenvwrapper](https://pypi.org/project/virtualenvwrapper/)

For Windows use [virtualenvwrapper-win](https://github.com/davidmarble/virtualenvwrapper-win/)

## Using Virtualenv and Virtualenvwrapper

### Install Virtualenv

```shell
pip install virtualenv
virtualenv --version
```

```shell
pip install virtualenvwrapper
pip install virtualenvwrapper-win
```

### Create virtual environment

Virtualenv

```shell
virtualenv virtualenv_name
```

Virtualenvwrapper

```shell
mkvirtualenv virtualenv_name
```

__Best practise is to use `venv` for virtualenv_name.__

### Activate virtual environment

Virtualenv

Linux

```shell
source virtualenv_name/bin/activate
```

Windows

```shell
virtualenv_name\Scripts\activate
```

Virtualenvwrapper

```shell
workon virtualenv_name
```

### Deactivate virtual environment

Virtualenv

```shell
deactivate
```

Virtualenvwrapper

```shell
(virtualenv_name) deactivate
```

## Managing Application Dependencies

```shell
pip freeze > requirements.txt
pip install -r requirements.txt
```

***

## Configure System variable

WORKON_HOME  
`C:\<project-path>\python_envs`
