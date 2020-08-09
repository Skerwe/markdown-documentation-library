# :computer: Venv

:link: [Venv](https://docs.python.org/3/tutorial/venv.html)

## Install Venv

Venv is bundled with the Python distribution

## Create virtual environment

```shell
py -3 -m venv virtualenv_name
```

__Best practise is to use `.venv` for virtualenv_name.__

## Activate virtual environment

Linux

```shell
source virtualenv_name/bin/activate
```

Windows

```shell
virtualenv_name\Scripts\activate.bat
virtualenv_name\scripts\activate
```

## Deactivate virtual environment

```shell
deactivate
```

***

## Configure System variable

ENV_DIR  
`C:\<project-path>\python_envs`
