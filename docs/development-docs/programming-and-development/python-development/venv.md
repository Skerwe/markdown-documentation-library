# Venv

:link: [Virtual Environments and Packages](https://docs.python.org/3/library/venv.html)

## Using Venv

### Install Venv

Venv is bundled with the Python distribution

### Create virtual environment

```shell
python -m venv .venv
```

### Activate virtual environment

Linux

```shell
source .venv/bin/activate
```

Windows

```shell
.venv\Scripts\activate.bat
.venv\Scripts\activate
```

### Deactivate virtual environment

```shell
deactivate
```

## Managing Application Dependencies

```shell
pip freeze > requirements.txt
pip install -r requirements.txt
```

***

## Configure System variable

ENV_DIR  
`C:\<project-path>\python_envs`
