export default [{
        menuId: 1,
        menuName: 'dashboard',
        parentId: 0,
        parentIds: '0',
        sort: 100,
        href: 'dashboard',
        icon: 'mdi-view-dashboard',
        new: true
    }, {
        menuId: 1,
        menuName: 'store',
        parentId: 0,
        parentIds: '0',
        sort: 100,
        href: 'store',
        icon: 'mdi-calendar-check',
        new: false,
        children: [{
                menuId: 2,
                menuName: 'storeAuth',
                parentId: 1,
                parentIds: '0,1',
                sort: 100,
                href: '/store/auth',
                icon: 'mdi-calendar-check',
            },
            {
                menuId: 3,
                menuName: 'storePage',
                parentId: 1,
                parentIds: '0,1',
                sort: 90,
                href: '/store/page',
                icon: 'mdi-calendar-check',
            }
        ]
    },

]