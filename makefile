install:
	@echo "Installing..."
	@echo "Creating virtual environment..."
	@python3 -m venv .venv
	@echo "Activating virtual environment..."
	@source .venv/Scripts/activate
	@echo "Installing dependencies..."
	@pip install -r requirements.txt
	@echo "Done!"

build:
    @echo "Building..."
    @./build_script.sh build

rebuild:
	@echo "Rebuilding..."
	@./build_script.sh rebuild

serve:
	@echo "Serving..."
	@./build_script.sh serve