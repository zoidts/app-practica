

 import Login from '../components/views/pages/user/LoginComponent'
 import NotFound from '../components/NotFound'
 /* import Mastercomponent from '../components/back/components/masterComponent' */


const routes = [
    {
        path: '*',
        component: NotFound
    },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  {
    path: '/',
    name: 'Dashboard',
//    component: Mastercomponent,
    component: () => import(/* webpackChunkName: "dashboard" */ '../components/back/components/masterComponent'),

    children: [{
        path: 'importar',
        name: 'Import',
        props: {title: 'Importar Lista'},
        component: () => import(/* webpackChunkName: "importar" */ '../components/views/pages/admin/ImportFileComponent'),
    },{
    path: 'importar-lista-proveedores',
    name: 'List-Supplier',
    props: {title: 'Lista de proveedores'},
    component: () => import(/* webpackChunkName: "ListSuppliers" */ '../components/views/pages/admin/ListSuppliersComponent'),
   }],
    beforeEnter:( to, from, next) => {
    axios.get('/api/authenticated').then(() => {
        next();
    }).catch(() => {
        return next({name: 'Login'})
    })
    },
  }



]



export default routes
