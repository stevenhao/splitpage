const qs = window.querystringify;
const others = ['<iframe width="1280" height="720" src="https://www.youtube.com/embed/74xCG9U4XFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'];
let state = {
  left: "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1",
  right: 'https://www.youtube.com/embed/74xCG9U4XFc?autoplay=1',
   others: ['https://www.youtube.com/embed/74xCG9U4XFc',],
  ...qs.parse(window.location.search)
};

document.getElementById("app").innerHTML = `
<div class="controls">
<span><input id="left"/>
<input id="right"/></span>
</div>
<div class="content">
<iframe data-id="left" src="${state.left}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe data-id="right" src="${state.right}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<style>
.controls {
  opacity: 0.8;
  display: flex;
  flex-direction: column;
}
.controls span {
  display: flex;
}
.controls span input {
  flex: 1;
  margin: 20px;
}
.controls:hover {
  opacity: 1;
  transition: .5s all;
}
.content {
  display: flex;

  flex: 1;
}
.content iframe {
  flex: 1;
  margin: 20px;
}
html, body, #app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}
input {

}
</style>
`;

const qq = (x) => document.querySelectorAll(x);

const setState = (stateUpdate) => {
  state = {
    ...state,
    ...stateUpdate
  };
  window.history.replaceState({}, "", "?" + qs.stringify(state));
  for (const el of qq("iframe")) {
     if (el.src !== state[el.getAttribute("data-id")]) {
       el.src = state[el.getAttribute("data-id")];
     }
  }
  for (const el of qq("input")) {
    el.value = state[el.id];
  }
};
setState(state);
const normalizeURL = (s) => {
  if (
    s.endsWith(".com") &&
    !(s.startsWith("https://") || s.startsWith("http://"))
  ) {
    s = "https://" + s;
  }
  if (s.startsWith("<iframe")) {
    s = s.split('src="')[1].split('"')[0];
  }
  if (s.startsWith("https://youtu.be")) {
    s = "https://www.youtube.com/embed" + s.split("youtu.be")[1];
  }
  return s;
};

for (const el of qq("input")) {
  el.addEventListener("change", (e) =>
    setState({
      [e.currentTarget.id]: normalizeURL(e.currentTarget.value)
    })
  );
}

