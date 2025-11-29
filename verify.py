import sys
from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Helper to get absolute path
        base_path = os.getcwd()

        print("Verifying Home...")
        page.goto(f'file://{base_path}/modern-app/out/index.html')
        page.screenshot(path='verify_home.png', full_page=True)

        print("Verifying About...")
        page.goto(f'file://{base_path}/modern-app/out/about.html')
        page.screenshot(path='verify_about.png', full_page=True)

        print("Verifying Pricing...")
        page.goto(f'file://{base_path}/modern-app/out/pricing.html')
        page.screenshot(path='verify_pricing.png', full_page=True)

        print("Verifying Sign In...")
        page.goto(f'file://{base_path}/modern-app/out/sign-in.html')
        page.screenshot(path='verify_signin.png', full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
