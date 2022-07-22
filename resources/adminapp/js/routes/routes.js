import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'contact-management',
        name: 'contact_management',
        component: View,
        redirect: { name: 'contact_companies.index' },
        children: [
          {
            path: 'contact-companies',
            name: 'contact_companies.index',
            component: () => import('@cruds/ContactCompanies/Index.vue'),
            meta: { title: 'cruds.contactCompany.title' }
          },
          {
            path: 'contact-companies/create',
            name: 'contact_companies.create',
            component: () => import('@cruds/ContactCompanies/Create.vue'),
            meta: { title: 'cruds.contactCompany.title' }
          },
          {
            path: 'contact-companies/:id',
            name: 'contact_companies.show',
            component: () => import('@cruds/ContactCompanies/Show.vue'),
            meta: { title: 'cruds.contactCompany.title' }
          },
          {
            path: 'contact-companies/:id/edit',
            name: 'contact_companies.edit',
            component: () => import('@cruds/ContactCompanies/Edit.vue'),
            meta: { title: 'cruds.contactCompany.title' }
          },
          {
            path: 'contact-contacts',
            name: 'contact_contacts.index',
            component: () => import('@cruds/ContactContacts/Index.vue'),
            meta: { title: 'cruds.contactContact.title' }
          },
          {
            path: 'contact-contacts/create',
            name: 'contact_contacts.create',
            component: () => import('@cruds/ContactContacts/Create.vue'),
            meta: { title: 'cruds.contactContact.title' }
          },
          {
            path: 'contact-contacts/:id',
            name: 'contact_contacts.show',
            component: () => import('@cruds/ContactContacts/Show.vue'),
            meta: { title: 'cruds.contactContact.title' }
          },
          {
            path: 'contact-contacts/:id/edit',
            name: 'contact_contacts.edit',
            component: () => import('@cruds/ContactContacts/Edit.vue'),
            meta: { title: 'cruds.contactContact.title' }
          }
        ]
      },
      {
        path: 'transactions',
        name: 'transactions.index',
        component: () => import('@cruds/Transactions/Index.vue'),
        meta: { title: 'cruds.transaction.title' }
      },
      {
        path: 'transactions/create',
        name: 'transactions.create',
        component: () => import('@cruds/Transactions/Create.vue'),
        meta: { title: 'cruds.transaction.title' }
      },
      {
        path: 'transactions/:id',
        name: 'transactions.show',
        component: () => import('@cruds/Transactions/Show.vue'),
        meta: { title: 'cruds.transaction.title' }
      },
      {
        path: 'transactions/:id/edit',
        name: 'transactions.edit',
        component: () => import('@cruds/Transactions/Edit.vue'),
        meta: { title: 'cruds.transaction.title' }
      },

      {
        path: 'content-management',
        name: 'content_management',
        component: View,
        redirect: { name: 'content_categories.index' },
        children: [
          {
            path: 'content-categories',
            name: 'content_categories.index',
            component: () => import('@cruds/ContentCategories/Index.vue'),
            meta: { title: 'cruds.contentCategory.title' }
          },
          {
            path: 'content-categories/create',
            name: 'content_categories.create',
            component: () => import('@cruds/ContentCategories/Create.vue'),
            meta: { title: 'cruds.contentCategory.title' }
          },
          {
            path: 'content-categories/:id',
            name: 'content_categories.show',
            component: () => import('@cruds/ContentCategories/Show.vue'),
            meta: { title: 'cruds.contentCategory.title' }
          },
          {
            path: 'content-categories/:id/edit',
            name: 'content_categories.edit',
            component: () => import('@cruds/ContentCategories/Edit.vue'),
            meta: { title: 'cruds.contentCategory.title' }
          },
          {
            path: 'content-tags',
            name: 'content_tags.index',
            component: () => import('@cruds/ContentTags/Index.vue'),
            meta: { title: 'cruds.contentTag.title' }
          },
          {
            path: 'content-tags/create',
            name: 'content_tags.create',
            component: () => import('@cruds/ContentTags/Create.vue'),
            meta: { title: 'cruds.contentTag.title' }
          },
          {
            path: 'content-tags/:id',
            name: 'content_tags.show',
            component: () => import('@cruds/ContentTags/Show.vue'),
            meta: { title: 'cruds.contentTag.title' }
          },
          {
            path: 'content-tags/:id/edit',
            name: 'content_tags.edit',
            component: () => import('@cruds/ContentTags/Edit.vue'),
            meta: { title: 'cruds.contentTag.title' }
          },
          {
            path: 'content-pages',
            name: 'content_pages.index',
            component: () => import('@cruds/ContentPages/Index.vue'),
            meta: { title: 'cruds.contentPage.title' }
          },
          {
            path: 'content-pages/create',
            name: 'content_pages.create',
            component: () => import('@cruds/ContentPages/Create.vue'),
            meta: { title: 'cruds.contentPage.title' }
          },
          {
            path: 'content-pages/:id',
            name: 'content_pages.show',
            component: () => import('@cruds/ContentPages/Show.vue'),
            meta: { title: 'cruds.contentPage.title' }
          },
          {
            path: 'content-pages/:id/edit',
            name: 'content_pages.edit',
            component: () => import('@cruds/ContentPages/Edit.vue'),
            meta: { title: 'cruds.contentPage.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
