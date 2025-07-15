"""
Mock script to simulate invoking Kiro spec-to-code generation.
In real usage, you'd call Kiro's API with the spec files.
"""

import yaml
import os

def load_spec(spec_path):
    with open(spec_path) as f:
        return yaml.safe_load(f)

def generate_code(spec):
    print(f"Generating code for {spec['name']} ({spec['type']}) ...")
    # Simulate generation - in reality, call Kiro API here
    # For hackathon, you can expand this script to parse and generate files

if __name__ == "__main__":
    specs_dir = "./.kiro/specs"
    for spec_file in os.listdir(specs_dir):
        if spec_file.endswith(".yaml"):
            spec = load_spec(os.path.join(specs_dir, spec_file))
            generate_code(spec)
