export interface EducationInterface {
    slug: string,
    degree: string,
    university: string,
    cgpa: string,
    startYear: string,
    endYear: string,
    isPresent: boolean,
    location: string,

}
export const educationData = [
    {
        slug: "ms",
        degree: "Master of Science (MS) in Information Technology",
        university: "University of Gujrat",
        cgpa: "3.7/4.00",
        startYear: "2018",
        endYear: "2020",
        isPresent: false,
        location: "Pakistan",
    },
    {
        slug: "bs",
        degree: "Bachelor of Science (BS) in Information Technology",
        university: "University of Gujrat",
        cgpa: "3.37/4.00",
        startYear: "2014",
        endYear: "2018",
        isPresent: false,
        location: "Pakistan",
    }
]