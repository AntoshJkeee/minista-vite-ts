export default function CheckJson() {
  const root = document.querySelector('[data-js-fake-api]');
  const btn = root.querySelector('button');

  btn.addEventListener('click', () => {
    const url = root.dataset.jsFakeApi;

    fetch(url).then(res => res.json()).then((data) => {
      console.log(data.chips);
    })
  })
}