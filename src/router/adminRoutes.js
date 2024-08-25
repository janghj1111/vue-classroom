//import i18n from '@/modules/i18n'

import { get } from "lodash";
import useStore from "@/stores";

//const { t: $t, d: $d, n: $n } = i18n.global
const defaultPath = "/admin";
const getMeta = (name, id, authCheck = true) => {
  return {
    id: id,
    name: name,
    authType: "admin",
    layout: "AdminLayout",
    reload: true,
    authCheck: authCheck,
  };
};

const authCheckRedirect = (to) => {
  const store = useStore();
  let path = "";
  for (let i = 0; i < to.matched[1].children.length; i++) {
    const children = to.matched[1].children[i];
    if (store.auth.isAuthMenuCheck(children.meta.id)) {
      path = children.path;
      break;
    }
  }
  return path;
};

const authCheck3DepthRedirect = (to) => {
  const store = useStore();
  let path = "";
  for (let i = 0; i < to.matched[1].children.length; i++) {
    const children = to.matched[1].children[i];
    if (children.children && children.children.length > 0) {
      const ch = children.children;
      for (let k = 0; k < children.children.length; k++) {
        const ch = children.children[k];
        if (store.auth.isAuthMenuCheck(ch.meta.id)) {
          path = ch.path;
          break;
        }
      }
    }
  }
  return path;
};

const adminRoutes = {
  path: defaultPath,
  meta: getMeta("Index", "000000"),
  children: [],
};

export default adminRoutes;
