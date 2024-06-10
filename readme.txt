#Firstly activate conda environment, the steps are displayed below:
$ conda create --name ECS639U python=3.9
$ conda activate ECS639U
(ECS639U)$ python --version
  python 3.9
(ECS639U)$ pip install --upgrade pip
  Collecting pip...

(ECS639U)$ pip install django
  Collecting django...

Once finished activation, 

Navigate to 'frontend' directory, run command 'npm install'
Then, navigate to 'backend' directory, run command 'pip install -r requirements.txt'

Once installed both, navigate to 'frontend' directory and run command 'npm run dev' for frontend
Once installed both, navigate to 'backend' directory and run command 'python3 manage.py runserver' for backend

To access the superuser, open the link to Django administration given below and enter the username & password:
http://127.0.0.1:8000/admin/
Superuser details:
username: karanm
email: karanm@gmail.com
PW: Karan