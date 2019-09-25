# Python Environment Setup

- [Pipenv & Virtual Environments](http://docs.python-guide.org/en/latest/dev/virtualenvs/)

## Pipenv

1. `pip install --user pipenv`
2. `pip install --user --upgrade pipenv`

- `pipenv -h` print help information

1. `pipenv install <pkg>` (generate requirements.txt)
2. `pipenv lock` ( generate Pipfile.lock)
3. `pipenv uninstall <pkg> [--all | --all-dev]`
4. `pipenv update --outdated`
5. `pipenv update <pkg>`

*Add the user scripts folder to your system PATH variable:*  
C:\Users\<user-name>\AppData\Roaming\Python\Python37\Scripts

## [Virtualenv](https://virtualenv.pypa.io/en/latest/)

[Latest Documentation](https://virtualenv.pypa.io/en/latest/)

1. `virtualenv venv`
2. `venv\Scripts\activate`
3. `deactivate`

- `lsvirtualenv` - list all your virtual environments
- `rmvirtualenv venv` - remove the virtual environment venv
