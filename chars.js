const t=[0,0,0,0];
const b=[0,0,0,255];

const asciiChars = {
32:{w:3,t:0,d:[t,t,t]},
33:{w:1,t:0,d:[b,b,b,b,b,t,b]},
34:{w:4,t:0,d:[t,b,t,b,t,b,t,b,b,t,b,t]},
35:{w:5,t:0,d:[t,b,t,b,t,t,b,t,b,t,b,b,b,b,b,t,b,t,b,t,b,b,b,b,b,t,b,t,b,t,t,b,t,b,t]},
36:{w:5,t:0,d:[t,t,b,t,t,t,b,b,b,b,b,t,t,t,t,t,b,b,b,t,t,t,t,t,b,b,b,b,b,t,t,t,b,t,t]},
37:{w:5,t:0,d:[b,t,t,t,b,b,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,t,b,t,t,b,b,t,t,t,b]},
38:{w:5,t:0,d:[t,t,b,t,t,t,b,t,b,t,t,t,b,t,t,t,b,b,t,b,b,t,b,b,t,b,t,t,b,t,t,b,b,t,b]},
39:{w:2,t:0,d:[t,b,t,b,b,t]},
40:{w:4,t:0,d:[t,t,b,b,t,b,t,t,b,t,t,t,b,t,t,t,b,t,t,t,t,b,t,t,t,t,b,b]},
41:{w:4,t:0,d:[b,b,t,t,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,b,t,t,b,t,b,b,t,t]},
42:{w:4,t:1,d:[t,t,t,t,b,t,t,b,t,b,b,t,b,t,t,b]},
43:{w:5,t:1,d:[t,t,b,t,t,t,t,b,t,t,b,b,b,b,b,t,t,b,t,t,t,t,b,t,t]},
44:{w:1,t:4,d:[t,b,b,b]},
45:{w:5,t:2,d:[t,t,t,t,t,b,b,b,b,b]},
46:{w:1,t:4,d:[t,b,b]},
47:{w:5,t:0,d:[t,t,t,t,b,t,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,t]},
48:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,b,b,b,t,b,t,b,b,b,t,t,b,b,t,t,t,b,t,b,b,b,t]},
49:{w:5,t:0,d:[t,t,b,t,t,t,b,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,b,b,b,b,b]},
50:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,t,t,t,b,t,t,b,b,t,t,b,t,t,t,b,t,t,t,b,b,b,b,b,b]},
51:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,t,t,t,b,t,t,b,b,t,t,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
52:{w:5,t:0,d:[t,t,t,b,b,t,t,b,t,b,t,b,t,t,b,b,t,t,t,b,b,b,b,b,b,t,t,t,t,b,t,t,t,t,b]},
53:{w:5,t:0,d:[b,b,b,b,b,b,t,t,t,t,b,b,b,b,t,t,t,t,t,b,t,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
54:{w:5,t:0,d:[t,t,b,b,t,t,b,t,t,t,b,t,t,t,t,b,b,b,b,t,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
55:{w:5,t:0,d:[b,b,b,b,b,b,t,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t]},
56:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
57:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b,t,t,t,t,b,t,t,t,b,t,t,b,b,t,t]},
58:{w:1,t:0,d:[t,b,b,t,t,b,b]},
59:{w:1,t:0,d:[t,b,b,t,t,b,b,b]},
60:{w:4,t:0,d:[t,t,t,b,t,t,b,t,t,b,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b]},
61:{w:5,t:1,d:[t,t,t,t,t,b,b,b,b,b,t,t,t,t,t,t,t,t,t,t,b,b,b,b,b]},
62:{w:4,t:0,d:[b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,b,t,t,b,t,t,b,t,t,t]},
63:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,t,t,t,t,t,t,b,t,t]},
64:{w:6,t:0,d:[t,b,b,b,b,t,b,t,t,t,t,b,b,t,b,b,t,b,b,t,b,b,t,b,b,t,b,b,b,b,b,t,t,t,t,t,t,b,b,b,b,t]},
65:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
66:{w:5,t:0,d:[b,b,b,b,t,b,t,t,t,b,b,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,b,b,b,t]},
67:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,b,t,b,b,b,t]},
68:{w:5,t:0,d:[b,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,b,b,b,t]},
69:{w:5,t:0,d:[b,b,b,b,b,b,t,t,t,t,b,b,b,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,b,b,b,b]},
70:{w:5,t:0,d:[b,b,b,b,b,b,t,t,t,t,b,b,b,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t]},
71:{w:5,t:0,d:[t,b,b,b,b,b,t,t,t,t,b,t,t,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
72:{w:5,t:0,d:[b,t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
73:{w:3,t:0,d:[b,b,b,t,b,t,t,b,t,t,b,t,t,b,t,t,b,t,b,b,b]},
74:{w:5,t:0,d:[t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
75:{w:5,t:0,d:[b,t,t,t,b,b,t,t,b,t,b,b,b,t,t,b,t,t,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
76:{w:5,t:0,d:[b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,b,b,b,b]},
77:{w:5,t:0,d:[b,t,t,t,b,b,b,t,b,b,b,t,b,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
78:{w:5,t:0,d:[b,t,t,t,b,b,b,t,t,b,b,t,b,t,b,b,t,t,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
79:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
80:{w:5,t:0,d:[b,b,b,b,t,b,t,t,t,b,b,b,b,b,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t]},
81:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,b,t,t,b,b,t,b]},
82:{w:5,t:0,d:[b,b,b,b,t,b,t,t,t,b,b,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
83:{w:5,t:0,d:[t,b,b,b,b,b,t,t,t,t,t,b,b,b,t,t,t,t,t,b,t,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
84:{w:5,t:0,d:[b,b,b,b,b,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t]},
85:{w:5,t:0,d:[b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
86:{w:5,t:0,d:[b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,t,b,t,t,b,t,b,t,t,t,b,t,t]},
87:{w:5,t:0,d:[b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,b,t,b,b,b,t,b,b,b,t,t,t,b]},
88:{w:5,t:0,d:[b,t,t,t,b,t,b,t,b,t,t,t,b,t,t,t,b,t,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
89:{w:5,t:0,d:[b,t,t,t,b,t,b,t,b,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t]},
90:{w:5,t:0,d:[b,b,b,b,b,t,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,t,b,b,b,b,b]},
91:{w:3,t:0,d:[b,b,b,b,t,t,b,t,t,b,t,t,b,t,t,b,t,t,b,b,b]},
92:{w:5,t:0,d:[b,t,t,t,t,t,b,t,t,t,t,b,t,t,t,t,t,b,t,t,t,t,t,b,t,t,t,t,b,t,t,t,t,t,b]},
93:{w:3,t:0,d:[b,b,b,t,t,b,t,t,b,t,t,b,t,t,b,t,t,b,b,b,b]},
94:{w:5,t:0,d:[t,t,b,t,t,t,b,t,b,t,b,t,t,t,b]},
95:{w:5,t:6,d:[t,t,t,t,t,b,b,b,b,b]},
96:{w:2,t:0,d:[b,t,b,t,t,b]},
97:{w:5,t:2,d:[t,b,b,b,t,t,t,t,t,b,t,b,b,b,b,b,t,t,t,b,t,b,b,b,b]},
98:{w:5,t:0,d:[b,t,t,t,t,b,t,t,t,t,b,t,b,b,t,b,b,t,t,b,b,t,t,t,b,b,t,t,t,b,b,b,b,b,t]},
99:{w:5,t:2,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,t,b,t,t,t,b,t,b,b,b,t]},
100:{w:5,t:0,d:[t,t,t,t,b,t,t,t,t,b,t,b,b,t,b,b,t,t,b,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b]},
101:{w:5,t:2,d:[t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,t,t,b,b,b,b]},
102:{w:4,t:0,d:[t,t,b,b,t,b,t,t,b,b,b,b,t,b,t,t,t,b,t,t,t,b,t,t,t,b,t,t]},
103:{w:5,t:2,d:[t,b,b,b,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b,t,t,t,t,b,b,b,b,b,t]},
104:{w:5,t:0,d:[b,t,t,t,t,b,t,t,t,t,b,t,b,b,t,b,b,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
105:{w:1,t:0,d:[b,t,b,b,b,b,b]},
106:{w:5,t:0,d:[t,t,t,t,b,t,t,t,t,t,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
107:{w:4,t:0,d:[b,t,t,t,b,t,t,t,b,t,t,b,b,t,b,t,b,b,t,t,b,t,b,t,b,t,t,b]},
108:{w:2,t:0,d:[b,t,b,t,b,t,b,t,b,t,b,t,t,b]},
109:{w:5,t:1,d:[t,t,t,t,t,b,b,t,b,t,b,t,b,t,b,b,t,b,t,b,b,t,t,t,b,b,t,t,t,b]},
110:{w:5,t:1,d:[t,t,t,t,t,b,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
111:{w:5,t:2,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
112:{w:5,t:1,d:[t,t,t,t,t,b,t,b,b,t,b,b,t,t,b,b,t,t,t,b,b,b,b,b,t,b,t,t,t,t,b,t,t,t,t]},
113:{w:5,t:2,d:[t,b,b,t,b,b,t,t,b,b,b,t,t,t,b,t,b,b,b,b,t,t,t,t,b,t,t,t,t,b]},
114:{w:5,t:1,d:[t,t,t,t,t,b,t,b,b,t,b,b,t,t,b,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t]},
115:{w:5,t:2,d:[t,b,b,b,b,b,t,t,t,t,t,b,b,b,t,t,t,t,t,b,b,b,b,b,t]},
116:{w:3,t:0,d:[t,b,t,t,b,t,b,b,b,t,b,t,t,b,t,t,b,t,t,t,b]},
117:{w:5,t:1,d:[t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b]},
118:{w:5,t:1,d:[t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,t,b,t,t,t,b,t,t]},
119:{w:5,t:1,d:[t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,b,t,b,b,t,b,t,b,t,b,b,b,b]},
120:{w:5,t:1,d:[t,t,t,t,t,b,t,t,t,b,t,b,t,b,t,t,t,b,t,t,t,b,t,b,t,b,t,t,t,b]},
121:{w:5,t:1,d:[t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b,t,t,t,t,b,b,b,b,b,t]},
122:{w:5,t:1,d:[t,t,t,t,t,b,b,b,b,b,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,b,b,b,b,b]},
123:{w:4,t:0,d:[t,t,b,b,t,b,t,t,t,b,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,t,b,b]},
124:{w:1,t:0,d:[b,b,b,t,b,b,b]},
125:{w:4,t:0,d:[b,b,t,t,t,t,b,t,t,t,b,t,t,t,t,b,t,t,b,t,t,t,b,t,b,b,t,t]},
126:{w:6,t:0,d:[t,b,b,t,t,b,b,t,t,b,b,t]},
161:{w:1,t:0,d:[t,b,t,b,b,b,b]},
163:{w:5,t:0,d:[t,t,b,b,t,t,b,t,t,b,t,b,t,t,t,b,b,b,b,t,t,b,t,t,t,t,b,t,t,t,b,b,b,b,b]},
170:{w:5,t:0,d:[t,b,b,b,t,t,t,t,t,b,b,b,b,b,b,t,b,b,b,b,t,t,t,t,t,b,b,b,b,b]},
171:{w:5,t:1,d:[t,t,b,t,b,t,b,t,b,t,b,t,b,t,t,t,b,t,b,t,t,t,b,t,b]},
172:{w:5,t:2,d:[t,t,t,t,t,b,b,b,b,b,t,t,t,t,b,t,t,t,t,b]},
174:{w:6,t:1,d:[t,b,b,b,b,t,b,t,b,b,t,b,b,t,b,t,t,b,b,b,t,b,t,b,t,b,b,b,b,t]},
176:{w:6,t:0,d:[t,t,b,b,b,t,t,b,b,t,b,b,t,b,b,t,b,b,t,t,b,b,b,t]},
177:{w:6,t:0,d:[t,t,b,b,t,t,t,t,b,b,t,t,b,b,b,b,b,b,t,t,b,b,t,t,t,t,b,b,t,t,t,t,t,t,t,t,b,b,b,b,b,b]},
178:{w:5,t:0,d:[t,b,b,b,t,t,t,t,b,b,t,t,b,b,t,t,b,b,t,t,t,b,b,b,b]},
183:{w:5,t:4,d:[t,t,t,b,b]},
186:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t,t,t,t,t,t,b,b,b,b,b]},
187:{w:5,t:0,d:[t,t,t,t,t,b,t,b,t,t,t,b,t,b,t,t,t,b,t,b,t,b,t,b,t,b,t,b,t,t]},
188:{w:5,t:0,d:[b,t,t,t,b,b,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,b,t,b,b,t,b,t,b,b,b,t,t,t,b]},
189:{w:5,t:0,d:[b,t,t,t,b,b,t,t,b,t,t,t,t,b,t,t,t,b,t,t,t,b,t,t,b,t,b,t,b,t,b,t,t,b,b]},
191:{w:5,t:0,d:[t,t,b,t,t,t,t,t,t,t,t,t,b,t,t,t,b,t,t,t,b,t,t,t,t,b,t,t,t,b,t,b,b,b,t]},
192:{w:5,t:0,d:[b,b,t,t,t,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b]},
193:{w:5,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b]},
194:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b]},
196:{w:5,t:0,d:[b,t,t,t,b,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
197:{w:5,t:0,d:[t,t,b,t,t,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b]},
198:{w:5,t:0,d:[t,b,b,b,b,b,t,b,t,t,b,b,b,b,t,b,t,b,t,t,b,t,b,t,t,b,t,b,t,t,b,t,b,b,b]},
199:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,t,b,t,t,t,t,b,t,t,t,b,t,b,b,b,t,t,t,t,t,b,t,t,b,b,t]},
200:{w:5,t:0,d:[b,b,t,t,t,t,t,t,t,t,b,b,b,b,b,b,t,t,t,t,b,b,b,t,t,b,t,t,t,t,b,b,b,b,b]},
201:{w:5,t:0,d:[t,t,t,b,b,t,t,t,t,t,b,b,b,b,b,b,t,t,t,t,b,b,b,t,t,b,t,t,t,t,b,b,b,b,b]},
202:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,t,b,b,b,t,t,b,t,t,t,t,b,b,b,b,b]},
203:{w:5,t:0,d:[t,b,t,b,t,t,t,t,t,t,b,b,b,b,b,b,t,t,t,t,b,b,b,t,t,b,t,t,t,t,b,b,b,b,b]},
205:{w:3,t:0,d:[t,b,b,t,t,t,b,b,b,t,b,t,t,b,t,t,b,t,b,b,b]},
209:{w:5,t:0,d:[b,b,b,b,b,t,t,t,t,t,b,t,t,t,b,b,b,t,t,b,b,t,b,t,b,b,t,t,b,b,b,t,t,t,b]},
211:{w:5,t:0,d:[t,t,t,b,b,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
212:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
213:{w:5,t:0,d:[b,b,b,b,b,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
214:{w:5,t:0,d:[b,t,t,t,b,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
215:{w:3,t:1,d:[t,t,t,b,t,b,t,b,t,b,t,b]},
216:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,b,b,b,t,b,t,b,b,b,t,t,b,b,t,t,t,b,t,b,b,b,t]},
218:{w:5,t:0,d:[t,t,t,b,b,t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
220:{w:5,t:0,d:[b,t,t,t,b,t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
223:{w:5,t:0,d:[b,b,b,b,t,b,t,t,t,b,b,t,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,b,b,t,b,t,t,t,t]},
224:{w:5,t:0,d:[b,b,t,t,t,t,t,t,t,t,t,b,b,b,t,t,t,t,t,b,t,b,b,b,b,b,t,t,t,b,t,b,b,b,b]},
225:{w:5,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,b,t,t,t,t,t,b,t,b,b,b,b,b,t,t,t,b,t,b,b,b,b]},
226:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,b,b,b,t,t,t,t,t,b,t,b,b,b,b,b,t,t,t,b,t,b,b,b,b]},
227:{w:5,t:0,d:[b,b,b,b,b,t,t,t,t,t,t,b,b,b,t,t,t,t,t,b,t,b,b,b,b,b,t,t,t,b,t,b,b,b,b]},
228:{w:5,t:0,d:[t,b,t,b,t,t,t,t,t,t,t,b,b,b,t,t,t,t,t,b,t,b,b,b,b,b,t,t,t,b,t,b,b,b,b]},
229:{w:5,t:0,d:[t,t,b,t,t,t,t,t,t,t,t,b,b,b,t,t,t,t,t,b,t,b,b,b,b,b,t,t,t,b,t,b,b,b,b]},
230:{w:5,t:2,d:[t,b,t,b,t,t,t,b,t,b,t,b,b,b,b,b,t,b,t,t,t,b,b,b,b]},
231:{w:5,t:1,d:[t,b,b,b,t,b,t,t,t,b,b,t,t,t,t,b,t,t,t,b,t,b,b,b,t,t,t,t,t,b,t,t,b,b,t]},
232:{w:5,t:0,d:[b,b,t,t,t,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,t,t,b,b,b,b]},
233:{w:5,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,t,t,b,b,b,b]},
234:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,t,t,b,b,b,b]},
235:{w:5,t:0,d:[t,b,t,b,t,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,t,t,b,b,b,b]},
236:{w:2,t:0,d:[b,b,t,t,t,b,t,b,t,b,t,b,t,b]},
237:{w:2,t:0,d:[b,b,t,t,b,t,b,t,b,t,b,t,b,t]},
238:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t,t,t,b,t,t]},
239:{w:3,t:0,d:[b,t,b,t,t,t,t,b,t,t,b,t,t,b,t,t,b,t,t,b,t]},
241:{w:5,t:0,d:[b,b,b,b,b,t,t,t,t,t,b,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b]},
242:{w:5,t:0,d:[b,b,t,t,t,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
243:{w:5,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
244:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
245:{w:5,t:0,d:[b,b,b,b,b,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
246:{w:5,t:0,d:[t,b,t,b,t,t,t,t,t,t,t,b,b,b,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,t]},
247:{w:6,t:0,d:[t,t,b,b,t,t,t,t,b,b,t,t,t,t,t,t,t,t,b,b,b,b,b,b,t,t,t,t,t,t,t,t,b,b,t,t,t,t,b,b,t,t]},
248:{w:5,t:2,d:[t,b,b,b,t,b,t,t,b,b,b,t,b,t,b,b,b,t,t,b,t,b,b,b,t,t,t,b,t,t]},
249:{w:5,t:0,d:[b,b,t,t,t,t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b]},
250:{w:5,t:0,d:[t,t,t,b,b,t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b]},
251:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b]},
252:{w:5,t:0,d:[t,b,t,b,t,t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b]},
255:{w:5,t:0,d:[t,b,t,b,t,t,t,t,t,t,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,t,b,b,b,b,t,t,t,t,b,b,b,b,b,t]},
287:{w:5,t:0,d:[b,t,t,t,b,t,b,b,b,t,t,t,t,t,t,t,b,b,b,b,b,t,t,t,b,t,b,b,b,b,t,t,t,t,b,b,b,b,b,t]},
304:{w:3,t:0,d:[t,b,t,t,t,t,b,b,b,t,b,t,t,b,t,t,b,t,b,b,b]},
305:{w:3,t:1,d:[t,t,t,b,b,t,t,b,t,t,b,t,t,b,t,b,b,b]},
338:{w:5,t:1,d:[t,b,b,b,b,b,t,b,t,t,b,t,b,b,t,b,t,b,t,t,b,t,b,t,t,t,b,b,b,b]},
339:{w:6,t:2,d:[t,b,t,b,b,t,b,t,b,t,t,b,b,t,b,b,b,t,b,t,b,t,t,t,t,b,t,b,b,b]},
350:{w:5,t:0,d:[t,b,b,b,b,b,t,t,t,t,t,b,b,b,t,t,t,t,t,b,b,t,t,t,b,t,b,b,b,t,t,t,t,t,b,t,t,b,b,t]},
351:{w:5,t:1,d:[t,b,b,b,b,b,t,t,t,t,t,b,b,b,t,t,t,t,t,b,b,b,b,b,t,t,t,t,t,b,t,t,b,b,t]},
372:{w:5,t:0,d:[t,t,b,t,t,t,b,t,b,t,t,t,t,t,t,b,t,t,t,b,b,t,b,t,b,b,b,t,b,b,b,t,t,t,b]},
373:{w:5,t:0,d:[t,t,b,t,t,t,b,t,b,t,t,t,t,t,t,b,t,t,t,b,b,t,b,t,b,b,t,b,t,b,t,b,b,b,b]},
382:{w:5,t:0,d:[b,t,t,t,b,t,b,b,b,t,t,t,t,t,t,b,b,b,b,b,t,t,b,b,t,t,b,t,t,t,b,b,b,b,b]},
402:{w:5,t:0,d:[t,t,t,b,t,t,t,b,t,b,t,t,b,t,t,t,b,b,b,t,t,t,b,t,t,t,t,b,t,t,b,t,b,t,t,t,b,t,t,t]},
519:{w:5,t:0,d:[t,b,b,b,t,b,t,t,t,b,t,b,b,b,t,b,t,t,t,b,b,b,b,b,b,b,t,t,t,t,t,b,b,b,b]},
915:{w:6,t:0,d:[t,t,t,t,t,t,b,b,b,b,b,b,b,b,t,t,b,b,b,b,t,t,t,t,b,b,t,t,t,t,b,b,t,t,t,t,b,b,t,t,t,t]},
920:{w:7,t:0,d:[t,t,b,b,b,t,t,t,b,b,t,b,b,t,b,b,t,t,t,b,b,b,b,b,b,b,b,b,b,b,t,t,t,b,b,t,b,b,t,b,b,t,t,t,b,b,b,t,t]},
931:{w:6,t:0,d:[b,b,b,b,b,b,b,b,t,t,b,b,t,b,b,t,t,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,b,b,b,b,b,b,b,b]},
934:{w:6,t:0,d:[b,b,b,b,b,b,t,t,b,b,t,t,t,b,b,b,b,t,b,b,t,t,b,b,b,b,t,t,b,b,t,b,b,b,b,t,t,t,b,b,t,t,b,b,b,b,b,b]},
937:{w:7,t:0,d:[t,t,b,b,b,t,t,t,b,b,t,b,b,t,b,b,t,t,t,b,b,b,b,t,t,t,b,b,t,b,b,t,b,b,t,t,b,b,t,b,b,t,b,b,b,t,b,b,b]},
945:{w:7,t:2,d:[t,b,b,b,t,b,b,b,b,t,b,b,b,t,b,b,t,t,b,t,t,b,b,t,b,b,b,t,t,b,b,b,t,b,b]},
946:{w:6,t:1,d:[t,b,b,b,b,t,b,b,t,t,b,b,b,b,b,b,b,t,b,b,t,t,b,b,b,b,b,b,b,t,b,b,t,t,t,t,b,b,t,t,t,t]},
948:{w:6,t:0,d:[t,t,t,b,b,b,t,t,b,b,t,t,t,t,t,b,b,t,t,b,b,b,b,b,b,b,t,t,b,b,b,b,t,t,b,b,t,b,b,b,b,t]},
956:{w:7,t:1,d:[t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,b,b,b,t,t,b,b,t,t,t,t,b,b,t,t,t,t,t]},
960:{w:7,t:0,d:[t,t,t,t,t,t,t,b,b,b,b,b,b,b,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t]},
963:{w:7,t:2,d:[t,b,b,b,b,b,b,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,t,b,b,b,t,t,t]},
964:{w:7,t:1,d:[t,b,b,b,t,b,b,b,b,t,b,b,b,t,t,t,t,b,b,t,t,t,t,t,b,b,t,t,t,t,t,b,b,t,t,t,t,t,b,b,t,t]},
8319:{w:6,t:0,d:[t,b,b,b,b,t,t,b,b,t,b,b,t,b,b,t,b,b,t,b,b,t,b,b,t,b,b,t,b,b]},
8709:{w:8,t:0,d:[t,t,t,t,t,b,b,t,t,t,t,t,b,b,t,t,t,b,b,b,b,b,b,t,b,b,t,b,b,t,b,b,b,b,t,b,b,t,b,b,t,b,b,b,b,b,b,t,t,b,b,t,t,t,t,t,b,b,t,t,t,t,t,t]},
8712:{w:5,t:0,d:[t,t,b,b,b,t,b,b,t,t,b,b,t,t,t,b,b,b,b,b,b,b,t,t,t,t,b,b,t,t,t,t,b,b,b]},
8729:{w:5,t:3,d:[t,t,t,b,b,t,t,t,b,b]},
8730:{w:8,t:0,d:[t,t,t,t,b,b,b,b,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,b,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,t,b,b,b,b,t,t,t,t,t,b,b,b,t,t]},
8734:{w:8,t:2,d:[t,b,b,b,b,b,b,t,b,b,t,b,b,t,b,b,b,b,t,b,b,t,b,b,t,b,b,b,b,b,b,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t]},
8745:{w:6,t:0,d:[t,b,b,b,b,t,b,b,t,t,b,b,b,b,t,t,b,b,b,b,t,t,b,b,b,b,t,t,b,b,b,b,t,t,b,b,b,b,t,t,b,b]},
8776:{w:7,t:1,d:[t,b,b,b,t,b,b,b,b,t,b,b,b,t,t,t,t,t,t,t,t,t,b,b,b,t,b,b,b,b,t,b,b,b,t]},
8801:{w:6,t:0,d:[t,t,t,t,t,t,b,b,b,b,b,b,t,t,t,t,t,t,b,b,b,b,b,b,t,t,t,t,t,t,b,b,b,b,b,b]},
8804:{w:6,t:0,d:[t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,t,t,b,b,t,t,t,t,t,b,b,t,t,t,t,t,t,t,b,b,b,b,b,b]},
8805:{w:6,t:0,d:[t,b,b,t,t,t,t,t,b,b,t,t,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,t,t,t,t,t,t,b,b,b,b,b,b]},
8992:{w:8,t:0,d:[t,t,t,t,b,b,b,t,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
8993:{w:5,t:0,d:[t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,b,b,t,b,b,b,b,t,b,b,t,b,b,b,t]},
9472:{w:8,t:3,d:[t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b]},
9474:{w:5,t:0,d:[t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b]},
9484:{w:8,t:3,d:[t,t,t,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
9488:{w:5,t:3,d:[t,t,t,t,t,b,b,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b]},
9492:{w:8,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,b,b,b]},
9496:{w:5,t:0,d:[t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,b,b,b,b,b]},
9500:{w:8,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
9508:{w:5,t:0,d:[t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b]},
9516:{w:8,t:3,d:[t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
9524:{w:8,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,b]},
9532:{w:8,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
9552:{w:8,t:1,d:[t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b,t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b]},
9553:{w:7,t:0,d:[t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b]},
9554:{w:8,t:2,d:[t,t,t,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
9555:{w:8,t:4,d:[t,t,b,b,b,b,b,b,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t]},
9556:{w:8,t:2,d:[t,t,b,b,b,b,b,b,t,t,b,b,t,t,t,t,t,t,b,b,t,b,b,b,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t]},
9557:{w:5,t:1,d:[t,t,t,t,t,b,b,b,b,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b]},
9558:{w:7,t:3,d:[t,t,t,t,t,t,t,b,b,b,b,b,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b]},
9559:{w:7,t:1,d:[t,t,t,t,t,t,t,b,b,b,b,b,b,b,t,t,t,t,t,b,b,b,b,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b]},
9560:{w:8,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,b,b,b]},
9561:{w:8,t:0,d:[t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,b,b,b,b]},
9562:{w:8,t:0,d:[t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,b,t,t,b,b,t,t,t,t,t,t,b,b,b,b,b,b]},
9563:{w:5,t:0,d:[t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,b,b,b,b,b]},
9564:{w:7,t:0,d:[t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,b,b,b,b,b,b,b]},
9565:{w:7,t:0,d:[t,t,b,b,t,b,b,t,t,b,b,t,b,b,b,b,b,b,t,b,b,t,t,t,t,t,b,b,b,b,b,b,b,b,b]},
9566:{w:8,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
9567:{w:8,t:0,d:[t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,b,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t]},
9568:{w:8,t:0,d:[t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,b,t,t,b,b,t,t,t,t,t,t,b,b,t,b,b,b,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t]},
9569:{w:5,t:0,d:[t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b,b,t,t,t,b,b]},
9570:{w:7,t:0,d:[t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,b,b,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b]},
9571:{w:7,t:0,d:[t,t,b,b,t,b,b,t,t,b,b,t,b,b,b,b,b,b,t,b,b,t,t,t,t,t,b,b,b,b,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b,t,t,b,b,t,b,b]},
9572:{w:8,t:1,d:[t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b,t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
9573:{w:8,t:3,d:[t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t]},
9574:{w:8,t:1,d:[t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b,t,t,t,t,t,t,t,t,b,b,b,b,t,b,b,b,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t]},
9575:{w:8,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,b,t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b]},
9576:{w:8,t:0,d:[t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,b,b,b,b,b,b,b,b]},
9577:{w:8,t:0,d:[t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,b,b,b,b,t,b,b,b,t,t,t,t,t,t,t,t,b,b,b,b,b,b,b,b]},
9578:{w:8,t:0,d:[t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,b,b,b,b,b,b,b,b,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t,t,t,t,b,b,t,t,t]},
9579:{w:8,t:0,d:[t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,b,b,b,b,b,b,b,b,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t]},
9580:{w:8,t:0,d:[t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,b,b,b,b,t,b,b,b,t,t,t,t,t,t,t,t,b,b,b,b,t,b,b,b,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t,t,t,b,b,t,b,b,t]},
9600:{w:8,t:0,d:[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]},
9604:{w:8,t:4,d:[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]},
9608:{w:8,t:0,d:[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]},
9612:{w:4,t:0,d:[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]},
9616:{w:8,t:0,d:[t,t,t,t,b,b,b,b,t,t,t,t,b,b,b,b,t,t,t,t,b,b,b,b,t,t,t,t,b,b,b,b,t,t,t,t,b,b,b,b,t,t,t,t,b,b,b,b,t,t,t,t,b,b,b,b,t,t,t,t,b,b,b,b]},
9617:{w:7,t:0,d:[t,t,b,t,t,t,b,b,t,t,t,b,t,t,t,t,b,t,t,t,b,b,t,t,t,b,t,t,t,t,b,t,t,t,b,b,t,t,t,b,t,t,t,t,b,t,t,t,b,b,t,t,t,b,t,t]},
9618:{w:8,t:0,d:[t,b,t,b,t,b,t,b,b,t,b,t,b,t,b,t,t,b,t,b,t,b,t,b,b,t,b,t,b,t,b,t,t,b,t,b,t,b,t,b,b,t,b,t,b,t,b,t,t,b,t,b,t,b,t,b,b,t,b,t,b,t,b,t]},
9619:{w:8,t:0,d:[b,b,t,b,b,t,b,b,t,b,b,b,t,b,b,b,b,b,t,b,b,t,b,b,b,b,b,t,b,b,b,t,b,b,t,b,b,t,b,b,t,b,b,b,t,b,b,b,b,b,t,b,b,t,b,b,b,b,b,t,b,b,b,t]},
9632:{w:6,t:2,d:[t,t,b,b,b,b,t,t,b,b,b,b,t,t,b,b,b,b,t,t,b,b,b,b]},
}