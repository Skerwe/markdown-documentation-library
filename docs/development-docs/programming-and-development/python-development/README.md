# Python Development Notes

:link: [python.org](https://www.python.org/)  
:link: [pypy.org](https://www.pypy.org/) -- A fast, alternative implementation of Python

## Pyhton Development

- :closed_book: [The Little Book of Python Anti-Patterns](https://docs.quantifiedcode.com/python-anti-patterns/index.html)
- :closed_book: [Python documentation](https://docs.python.org/3/)

### Python in VSCode

- [Python in VS Code](https://code.visualstudio.com/docs/languages/python)  
- [Getting Started with Python in VS Code](https://code.visualstudio.com/docs/python/python-tutorial)

### Code with Mu

A simple Python editor for beginner programmers

:link: [codewith.mu](https://codewith.mu/en/)

```shell
pip install mu-editorcd
```

```shell
mu-editor
```

### Python Package Installer

:link: [pip.pypa.io](https://pip.pypa.io/en/stable/) -- Pip Python Package Installer  
:link: [pypi.org](https://pypi.org/) -- Python Package Index

Basic commands to install and manage Python packages:

```shell
pip install SomePackage
pip list --outdated
pip install --upgrade SomePackage
pip uninstall SomePackage
```

Upgrading pip to the latest version

```shell
python -m pip install --upgrade pip
```

### Python Project Environment

- :link: [Python Virtual Environments: A Primer](https://realpython.com/python-virtual-environments-a-primer/)
- :link: [Pipenv & Virtual Environments](https://python-docs.readthedocs.io/en/latest/dev/virtualenvs.html)
- :link: [How virtual environments work](https://snarky.ca/how-virtual-environments-work/)

1. [venv](development-docs/programming-and-development/python-development/venv.md)
2. [Virtualenv](development-docs/programming-and-development/python-development/virtualenv.md)
3. [Pipenv](development-docs/programming-and-development/python-development/pipenv.md)
4. [Poetry](https://python-poetry.org/)
5. [PDM](https://pdm.fming.dev/)

### Python Style Guide

- [PEP 8](https://www.python.org/dev/peps/pep-0008/) -- Style Guide for Python Code
- [Python testing style guide](https://blog.thea.codes/my-python-testing-style-guide/)

### Folder Structure

- [Python Application Layouts: A Reference](https://realpython.com/python-application-layouts/)
- [Structuring Your Project](https://docs.python-guide.org/writing/structure/)

### Build and Distribute Python Packages                    

1. [Python Packaging User Guide](https://python-packaging-user-guide.readthedocs.io/)
2. Packaging Python projects with [Setuptools](https://setuptools.readthedocs.io/en/latest/)

### Tools

- [pip-tools](https://github.com/jazzband/pip-tools/)
- [Sphinx](https://www.sphinx-doc.org/en/master/) -- documentation generator

## Web Devlopment with Python

1. [Django](https://www.djangoproject.com/)
2. [Flask](https://palletsprojects.com/p/flask/)
3. [Falcon](http://falconframework.org/)
4. [CherryPy](https://cherrypy.org/)

## Gui Development

- [Dear PyGui](https://github.com/hoffstadt/DearPyGui)
- [Urwid](http://urwid.org/) -- Console UI

## Simple HTTP Server with Python

[How do you set up a local testing server? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)

Python 2:  
`python -m SimpleHTTPServer 8000`

Python 3:  
`python -m http.server 8000`

## Learning Python

:books: [The Python Handbook](https://www.freecodecamp.org/news/the-python-handbook/)  
:books: [Python String Manipulation Handbook](https://www.freecodecamp.org/news/python-string-manipulation-handbook/)

1. [Real Python](https://realpython.com/)
2. [Beginner's Guide to Python](https://wiki.python.org/moin/BeginnersGuide)
3. [The Hitchhiker’s Guide to Python](https://docs.python-guide.org/)
4. [Intermediate Python Tips](https://book.pythontips.com/en/latest/index.html)
5. [Python Programming Tutorials](https://www.youtube.com/playlist?list=PLi01XoE8jYohWFPpC17Z-wWhPOSuh8Er-) (Youtube)
6. [Python Koans](https://github.com/gregmalcolm/python_koans)
7. [Python Intro](http://bennuttall.github.io/python-intro/)
8. [Python 101](https://python101.pythonlibrary.org/)
9. [Python 102](https://python-102.readthedocs.io/en/latest)

### Teach & Learn Python Programming

:link: [Karel the Robot](https://stanford.edu/~cpiech/karel/learn.html) | [Tutorial](https://compedu.stanford.edu/karel-reader/docs/python/en/chapter1.html)

### Turtle

:link: [turtle — Turtle graphics](https://docs.python.org/3/library/turtle.html)

1. [The Beginner's Guide to Python Turtle](https://realpython.com/beginners-guide-python-turtle/)

### Other Tutorials

- [Intro to Programming with Python](http://python-intro.readthedocs.io/en/latest/index.html)
- [pytudes](https://github.com/norvig/pytudes)
- [Python For Kids](https://github.com/mytechnotalent/Python-For-Kids)

## Python Projects

1. :notebook_with_decorative_cover: [Python Game Development Notes](development-docs/game-development/game-engines-and-frameworks/python-game-development.md)
2. [PyBoy](https://github.com/Baekalfen/PyBoy) Game Boy emulation

## Interesting Blog Posts

1. [A Guide to Python’s Virtual Environments](https://towardsdatascience.com/virtual-environments-104c62d48c54)
2. [Managing Dependencies in Python Applications](https://medium.com/@jimjh/managing-dependencies-in-python-applications-b9c93dda98c2)
3. [Common Python Data Structures](https://realpython.com/python-data-structures/) (Guide)
4. [How to make an awesome Python package](https://antonz.org/python-packaging/)

***

## Configuration System variable

  PYTHON_SCRIPTS  
  `C:\Users\<user-name>\AppData\Roaming\Python\Python38\Scripts`
