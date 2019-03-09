import { Message } from 'element-ui';

import { getArticles } from '@/api/articles';

import {
  login,
  register
} from '@/api/admin';

import {
  SET_ARTICLES,
  SET_USER
} from './mutation-types';

const actions = {
  async getArticles({ commit }) {
    const res = await getArticles();
    commit(SET_ARTICLES, res.data);
  },
  async loginAction({ commit }, user) {
    const res = await login(user);

    commit(SET_USER, res.data);
    Message({ message: '登录成功', type: 'success' });
  },
  async registerAction({ commit }, user) {
    const res = await register(user);

    commit(SET_USER, res.data);

    Message({ message: '恭喜你注册成功', type: 'success' });
  }
};

export default actions;
