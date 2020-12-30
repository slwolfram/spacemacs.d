from pleromanet import create_app
import logging

def main():
    logging.basicConfig()
    logging.getLogger().setLevel(logging.DEBUG)
    create_app().run(debug=True, host='0.0.0.0', port='5000')

if __name__ == '__main__':
    main()
