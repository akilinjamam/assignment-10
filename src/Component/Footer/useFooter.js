const useFooter = () => {
    const today = new Date()
    const year = today.getFullYear();

    const footerOptions = [
        {
            title: 'Solutions',
            topic: ['Marketing', 'Analytics', 'Commerce', 'Insights']
        },
        {
            title: 'Supports',
            topic: ['Pricing', 'Documentation', 'Guides', 'Api Status']
        },
        {
            title: 'Company',
            topic: ['About', 'Annual Reports', 'Corporate Laws', 'Management Systems']
        },
        {
            title: 'About',
            topic: ['History', 'Founding Members', 'Suppliers', 'customers']
        },
    ]
    return [footerOptions, year]
};

export default useFooter;