
export class Badge {
    constructor(
        public Name: string,
        public ClassName: string,
    ) { }
};

export class Blog {
    constructor(
        public URL: string,
        public Date: Date,
        public Badges: Badge[],
    ) { }
};
