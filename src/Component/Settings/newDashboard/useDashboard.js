
const useDashboard = (location) => {

    const allButtons = [
        {
            link: {
                one: '/dashboard',
                two: '/dashboard/addToHome',
                three: '/dashboard/addToAbroad',
                four: `/dashboard/updateHome/${location.pathname?.slice(22)}`,
                five: `/dashboard/updateGlobal/${location.pathname?.slice(24)}`
            },
            iconName: 'uil uil-plane-fly',
            value: 'EVENTS',
            functionType: 'navigate'
        },
        {
            link: {
                one: '/dashboard/dashboardHomeBlogs',
                two: '/dashboard/addToBlog',
                three: `/dashboard/updateBlog/${location.pathname?.slice(22)}`,

            },
            iconName: 'uil uil-document-layout-right',
            value: 'BLOGS',
            functionType: 'navigate'
        },
        {
            link: {
                one: '/dashboard/feedbackDash',

            },
            iconName: 'uil uil-feedback',
            value: 'REVIEW',
            functionType: 'navigate'
        },
        {
            link: {

            },
            iconName: 'uil uil-user-md',
            value: 'ADMIN',
            functionType: 'handleAdmin'
        },
        {
            link: {
                one: '/',

            },
            iconName: 'uil uil-home',
            value: 'BACK TO HOME',
            functionType: 'navigate'
        },
        {
            link: {
                one: '/dashboard/userControll',

            },
            iconName: 'uil uil-users-alt',
            value: 'USER CONTROLL',
            functionType: 'navigate'
        },
        {
            link: {
                one: '/dashboard/transection',

            },
            iconName: 'uil uil-transaction',
            value: 'TRANSECTION',
            functionType: 'navigate'
        },
        {
            link: {
                one: '',

            },
            iconName: 'uil uil-step-backward-alt',
            value: 'BACK',
            functionType: 'setSlider'
        },

    ]


    return [allButtons]
};

export default useDashboard;