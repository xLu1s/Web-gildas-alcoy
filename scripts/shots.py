import sys
from playwright.sync_api import sync_playwright
URL='http://localhost:4321/Web-gildas-alcoy/'
OUT='/workspace/webs/gildas-alcoy/'
def settle(pg):
    h=pg.evaluate('document.body.scrollHeight')
    y=0
    while y<h:
        pg.evaluate(f'window.scrollTo(0,{y})'); pg.wait_for_timeout(120); y+=500
        h=pg.evaluate('document.body.scrollHeight')
    pg.evaluate('document.querySelectorAll(".reveal").forEach(e=>e.classList.add("is-visible"))')
    pg.evaluate('window.scrollTo(0,0)'); pg.wait_for_timeout(1200)
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--autoplay-policy=no-user-gesture-required'])
    errs=[]
    pg=b.new_page(viewport={'width':1280,'height':800})
    pg.on('console', lambda m: errs.append(m.text) if m.type=='error' else None)
    pg.on('requestfailed', lambda r: errs.append('FAIL '+r.url))
    pg.on('response', lambda r: errs.append(f'{r.status} {r.url}') if r.status>=400 else None)
    pg.goto(URL, wait_until='networkidle'); pg.wait_for_timeout(7000)
    pg.screenshot(path=OUT+'preview-hero.png')
    settle(pg); pg.screenshot(path=OUT+'preview-desktop.png', full_page=True)
    pg.evaluate('document.getElementById("carta").scrollIntoView()'); pg.wait_for_timeout(800)
    el=pg.locator('#carta'); el.screenshot(path=OUT+'preview-carta.png')
    m=b.new_page(viewport={'width':390,'height':844}, device_scale_factor=2, is_mobile=True, has_touch=True)
    m.goto(URL, wait_until='networkidle'); m.wait_for_timeout(2000)
    m.screenshot(path='/tmp/mobile-hero.png')
    settle(m); m.screenshot(path=OUT+'preview-mobile.png', full_page=True)
    print('\n'.join(errs) or 'no errors')
    b.close()
