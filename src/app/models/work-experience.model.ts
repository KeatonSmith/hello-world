export interface WorkExperience {
    position:     string;
    startDate:    string;
    endDate:      string;
    location:     string;
    employer:     string;
    description:  string;
    bulletPoints: string[];
    links:        Link[];
}

export interface Link {
    title: string;
    url:   string;
}