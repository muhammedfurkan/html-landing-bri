from playwright.sync_api import sync_playwright

def verify(page):
    page.goto("http://localhost:3001")
    page.wait_for_load_state("networkidle")
    # Take full page screenshot
    page.screenshot(path="verification.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify(page)
        finally:
            browser.close()
