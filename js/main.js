const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url);
    if (!res.ok) throw Object.assign(new Error(res.statusText + " " + url), { res });
    return {
      getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
    };
  },
  handleModule: async (type, getContentData, path, options) => {
    switch (type) {
      case ".svg":
        return path;
      case ".png":
        return path;
      case ".jpg":
        return path;
    }
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement("style"), { textContent });
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
};

const { loadModule } = window["vue3-sfc-loader"];

const app = Vue.createApp({
  components: {
    "my-component": Vue.defineAsyncComponent(() => loadModule("../components/App.vue", options)),
  },
  template: "<my-component></my-component>",
});

app.mount("#app");
