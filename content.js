window.addEventListener("load", (event) => {
  const html = document.querySelector("html");
  const body = document.querySelector("body");

  setTimeout(() => {
    const gdpr = document.querySelectorAll('div[class*="gdpr"]');
    const popin = document.querySelectorAll('div[class*="popin"]');
    const consent = document.querySelectorAll(
      'div[class*="appconsent"],div[id*="appconsent"],div[class*="consent"],div[id*="consent"]'
    );
    const didomi = document.querySelectorAll(
      'div[class*="didomi"],div[id*="didomi-host"],div[id*="didomi"]'
    );
    const cmp = document.querySelectorAll('div[class*="cmp"]');
    const tc = document.querySelectorAll('div[class*="tc-privacy"]');
    const tarteaucitron = document.querySelectorAll(
      'div[class*="tarteaucitron"]'
    );
    let elementList = [gdpr, popin, consent, didomi, cmp, tc, tarteaucitron];
    Loop(elementList);
  }, 500);

  async function deleteGdpr(elementList) {
    const iframes = document.querySelectorAll("iframe");
    if (iframes !== undefined) {
      for (let i = 0; i < iframes.length; i++) {
        const id = iframes[i].getAttribute("id");
        if (id && id.includes("paywall")) {
          iframes[i].remove();
        }
      }
    }
    elementList.forEach((element) => {
      for (let i = 0; i < element.length; i++) {
        const el = element[i];
        el.remove();
      }
    });
  }

  async function Loop(elementList) {
    await deleteGdpr(elementList);
    while (
      html.style.overflow != "visible" &&
      body.style.overflow != "visible"
    ) {
      html.style.overflow = "visible";
      body.style.overflow = "visible";
    }
    for (let i = 0; i < body.classList.length; i++) {
      const element = body.classList[i];
      if (element.includes("didomi")) {
        body.classList.remove(element);
      }
      if (element.includes("cmp")) {
        body.classList.remove(element);
      }
    }
    for (let i = 0; i < html.classList.length; i++) {
      const element = html.classList[i];
      if (element.includes("didomi")) {
        html.classList.remove(element);
      }
      if (element.includes("cmp")) {
        html.classList.remove(element);
      }
    }
  }
});
