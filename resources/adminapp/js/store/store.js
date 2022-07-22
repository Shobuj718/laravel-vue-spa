import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'

import ContactCompaniesIndex from './cruds/ContactCompanies'
import ContactCompaniesSingle from './cruds/ContactCompanies/single'
import ContactContactsIndex from './cruds/ContactContacts'
import ContactContactsSingle from './cruds/ContactContacts/single'

import TransactionsIndex from './cruds/Transactions'
import TransactionsSingle from './cruds/Transactions/single'

import ContentCategoriesIndex from './cruds/ContentCategories'
import ContentCategoriesSingle from './cruds/ContentCategories/single'

import ContentPagesIndex from './cruds/ContentPages'
import ContentPagesSingle from './cruds/ContentPages/single'

import ContentTagsIndex from './cruds/ContentTags'
import ContentTagsSingle from './cruds/ContentTags/single'



Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    ContactCompaniesIndex,
    ContactCompaniesSingle,
    ContactContactsIndex,
    ContactContactsSingle,
    TransactionsIndex,
    TransactionsSingle,
    ContentCategoriesIndex,
    ContentCategoriesSingle,
    ContentPagesIndex,
    ContentPagesSingle,
    ContentTagsIndex,
    ContentTagsSingle
  },
  strict: debug
})
