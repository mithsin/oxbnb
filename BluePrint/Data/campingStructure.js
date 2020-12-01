const cardStatus = {
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
    marketValue: '277,781.00',
    loanRequest: '185,000.00',
    accumulated: '110,000.00',
    investors: 8,
    startDate: '01/02/2020',
    endDate: '02/02/2020',
    purchaserBackgroundChecked: 'checked',
    campaign: {
        story: 'why',
        risk: 'risk',
        offer: {
            option1: {
                description: '1% interest every month base on your investment',
                minInvestmentPeriod: "1 yr",
                minInvestmentPerInvestor: 10000,
                maxInvestmentPerInvestor: 185000,
                maxPeriod: '30 yrs'
            },
            option2: {
                description: 'market value % base on your investment at selling date',
                minInvestmentPeriod: "1 yr",
                minInvestmentPerInvestor: 10000,
                maxInvestmentPerInvestor: 185000,
                maxPeriod: '30 yrs'
            }
        }
    },
    PropertyDetails: {
        images: ['a.jpg', 'b.jpg', 'c.jpg'],
        location: {
            address: '123 mock st',
            address2: '#23',
            city: 'Atlanta',
            state: 'Georgia',
            zipCode: '30096',
            country: 'USA',
        },
        bd: 4,
        ba: 2.5,
        sqft: 2076,
        type: 'Single family',
        yearBuild: '2004',
        heating: 'Forced air, Gas',
        cooling: 'Other',
        parking: 'Garage-attached, covered',
        lot: '6,969 sqft',
        estRentValue: "$1795/mo",
        estMarketValue: 277781.00,
        hoa: '$65/mo',
        other: {
            history: [],
            school: [],
            taxHistory: [],
        }
    },
    purchaser: {
        name: 'david chen',
        employmentStatus: 'employee',
        jobTitle: 'web engineer'
    },
    QA: [{
        member: 'Angel Investor 01',
        superInvestor: true,
        questionDate: '01/15/2020',
        question: 'what are you going to do with this property?',
        answerDate: '01/15/2020',
        answer: 'short term rent',
    }]
}