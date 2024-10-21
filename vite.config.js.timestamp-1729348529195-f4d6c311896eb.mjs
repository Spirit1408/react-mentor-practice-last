// vite.config.js
import { defineConfig } from "file:///D:/Projects/react-mentor-practice-last/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Projects/react-mentor-practice-last/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: { sourcemap: true },
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      helpers: "/src/helpers",
      styles: "/src/styles",
      service: "/src/service",
      reduxState: "/src/reduxState"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxyZWFjdC1tZW50b3ItcHJhY3RpY2UtbGFzdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxccmVhY3QtbWVudG9yLXByYWN0aWNlLWxhc3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL3JlYWN0LW1lbnRvci1wcmFjdGljZS1sYXN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBidWlsZDogeyBzb3VyY2VtYXA6IHRydWUgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBjb21wb25lbnRzOiAnL3NyYy9jb21wb25lbnRzJyxcclxuICAgICAgcGFnZXM6ICcvc3JjL3BhZ2VzJyxcclxuICAgICAgaGVscGVyczogJy9zcmMvaGVscGVycycsXHJcbiAgICAgIHN0eWxlczogJy9zcmMvc3R5bGVzJyxcclxuICAgICAgc2VydmljZTogJy9zcmMvc2VydmljZScsXHJcbiAgICAgIHJlZHV4U3RhdGU6ICcvc3JjL3JlZHV4U3RhdGUnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUyxTQUFTLG9CQUFvQjtBQUN2VSxPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU8sRUFBRSxXQUFXLEtBQUs7QUFBQSxFQUN6QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
