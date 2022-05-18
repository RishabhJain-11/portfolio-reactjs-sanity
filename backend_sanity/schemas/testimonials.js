export default {
    name : 'testimonials',
    title : 'Testimonials',
    type : 'document',
    fields : [
        {
            name:'name',
            title: 'Name',
            type: 'string'
        },
        {
            name:'company',
            title: 'Company',
            type: 'string'
        },
        {
            name:'imageUrl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot:true,//that the user will be able to crop the image
            }
        },
        {
            name:'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ]
}