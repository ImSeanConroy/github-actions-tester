import os

def run():
    message = os.environ['INPUT_MESSAGE']
    print(message)

if __name__ == '__main__':
    run()