# autmation starter projcet 
# run xamp services 
# open back folder 
# open front folder in vs code 


import subprocess
import os
import psutil

def start_xampp():
    
    xampp_control_path = r'C:\xampp\xampp-control.exe'
    
    if os.path.exists(xampp_control_path):
        subprocess.Popen([xampp_control_path, 'start'])
        print("XAMPP server started successfully.")
        start_services()
    else:
        print("XAMPP control executable not found at the specified path.")

def start_services():
    if not is_service_running('Apache'):
        start_apache()
    else:
        print("Apache service is already running.")

    if not is_service_running('MySQL'):
        start_mysql()
    else:
        print("MySQL service is already running.")

def start_apache():
    # Path to XAMPP executable
    xampp_path = r'C:\xampp'
    subprocess.Popen([os.path.join(xampp_path, 'apache', 'bin', 'httpd.exe'), '-k', 'start'])
    print("Apache service started.")

def start_mysql():
    # Path to XAMPP executable
    xampp_path = r'C:\xampp'
    subprocess.Popen([os.path.join(xampp_path, 'mysql', 'bin', 'mysqld.exe'), '--defaults-file=' + os.path.join(xampp_path, 'mysql', 'bin', 'my.ini'), '--standalone'])
    print("MySQL service started.")

def is_service_running(service_name):
    for process in psutil.process_iter():
        if process.name().lower() == service_name.lower() + '.exe':
            return True
    return False

 

def open_folder_in_vscode(folder_path):
    # Full path to VS Code executable
    vscode_path = r'path\Programs\Microsoft VS Code\Code.exe'
    
    if os.path.exists(vscode_path):
        # Command to open folder in VS Code
        subprocess.Popen([vscode_path, folder_path])
        print("Opened folder in VS Code.")
    else:
        print("Visual Studio Code is not installed or the path is incorrect.")


def open_folder(path):
    try:
        os.startfile(path)
        print(f"Folder opened: {path}")
    except FileNotFoundError:
        print(f"Folder not found: {path}")
    except Exception as e:
        print(f"An error occurred: {e}")
 


def open_folder_in_terminal(path):
    try:
        os.chdir(path)
        os.system('start cmd')
        print(f"Terminal opened for folder: {path}")
    except FileNotFoundError:
        print(f"Folder not found: {path}")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    #xamp
    start_xampp()

    # back
    folder_path = r'path\E-Commerce\Back'
    open_folder(folder_path) 
    
    #front
    front_end_folder_path = r'path\E-Commerce\clint'
    open_folder_in_vscode(front_end_folder_path)
 