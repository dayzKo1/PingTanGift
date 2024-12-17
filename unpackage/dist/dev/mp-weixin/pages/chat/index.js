"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      routes: [
        {
          path: "/pages/login/login-withoutpwd",
          style: {
            "navigationBarTitleText": "微信免密登录"
          }
        },
        {
          path: "/pages/pages/userinfo/userinfo",
          style: {
            "navigationBarTitleText": "个人资料"
          }
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    handlePush(path) {
      common_vendor.index.navigateTo({
        url: path
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.routes, (item, index, i0) => {
      return {
        a: common_vendor.t(item.style.navigationBarTitleText),
        b: index,
        c: common_vendor.o(($event) => $options.handlePush(item.path), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5a559478"]]);
wx.createPage(MiniProgramPage);
