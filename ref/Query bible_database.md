# Query total verses

## Create database

1. clone repository: <https://github.com/scrollmapper/bible_databases.git>
2. create `schema` called `bible`
3. run `bible-mysql.sql` against this database

## Query database for verse numbers

``` sql
select count(v) from t_kjv where v = 1
union all select count(v) from t_kjv where v = 2
union all select count(v) from t_kjv where v = 3
union all select count(v) from t_kjv where v = 4
union all select count(v) from t_kjv where v = 5
union all select count(v) from t_kjv where v = 6
union all select count(v) from t_kjv where v = 7
union all select count(v) from t_kjv where v = 8
union all select count(v) from t_kjv where v = 9
union all select count(v) from t_kjv where v = 10
union all select count(v) from t_kjv where v = 11
union all select count(v) from t_kjv where v = 12
union all select count(v) from t_kjv where v = 13
union all select count(v) from t_kjv where v = 14
union all select count(v) from t_kjv where v = 15
union all select count(v) from t_kjv where v = 16
union all select count(v) from t_kjv where v = 17
union all select count(v) from t_kjv where v = 18
union all select count(v) from t_kjv where v = 19
union all select count(v) from t_kjv where v = 20
union all select count(v) from t_kjv where v = 21
union all select count(v) from t_kjv where v = 22
union all select count(v) from t_kjv where v = 23
union all select count(v) from t_kjv where v = 24
union all select count(v) from t_kjv where v = 25
union all select count(v) from t_kjv where v = 26
union all select count(v) from t_kjv where v = 27
union all select count(v) from t_kjv where v = 28
union all select count(v) from t_kjv where v = 29
union all select count(v) from t_kjv where v = 30
union all select count(v) from t_kjv where v = 31
union all select count(v) from t_kjv where v = 32
union all select count(v) from t_kjv where v = 33
union all select count(v) from t_kjv where v = 34
union all select count(v) from t_kjv where v = 35
union all select count(v) from t_kjv where v = 36
union all select count(v) from t_kjv where v = 37
union all select count(v) from t_kjv where v = 38
union all select count(v) from t_kjv where v = 39
union all select count(v) from t_kjv where v = 40
union all select count(v) from t_kjv where v = 41
union all select count(v) from t_kjv where v = 42
union all select count(v) from t_kjv where v = 43
union all select count(v) from t_kjv where v = 44
union all select count(v) from t_kjv where v = 45
union all select count(v) from t_kjv where v = 46
union all select count(v) from t_kjv where v = 47
union all select count(v) from t_kjv where v = 48
union all select count(v) from t_kjv where v = 49
union all select count(v) from t_kjv where v = 50
union all select count(v) from t_kjv where v = 51
union all select count(v) from t_kjv where v = 52
union all select count(v) from t_kjv where v = 53
union all select count(v) from t_kjv where v = 54
union all select count(v) from t_kjv where v = 55
union all select count(v) from t_kjv where v = 56
union all select count(v) from t_kjv where v = 57
union all select count(v) from t_kjv where v = 58
union all select count(v) from t_kjv where v = 59
union all select count(v) from t_kjv where v = 60
union all select count(v) from t_kjv where v = 61
union all select count(v) from t_kjv where v = 62
union all select count(v) from t_kjv where v = 63
union all select count(v) from t_kjv where v = 64
union all select count(v) from t_kjv where v = 65
union all select count(v) from t_kjv where v = 66
union all select count(v) from t_kjv where v = 67
union all select count(v) from t_kjv where v = 68
union all select count(v) from t_kjv where v = 69
union all select count(v) from t_kjv where v = 70
union all select count(v) from t_kjv where v = 71
union all select count(v) from t_kjv where v = 72
union all select count(v) from t_kjv where v = 73
union all select count(v) from t_kjv where v = 74
union all select count(v) from t_kjv where v = 75
union all select count(v) from t_kjv where v = 76
union all select count(v) from t_kjv where v = 77
union all select count(v) from t_kjv where v = 78
union all select count(v) from t_kjv where v = 79
union all select count(v) from t_kjv where v = 80
union all select count(v) from t_kjv where v = 81
union all select count(v) from t_kjv where v = 82
union all select count(v) from t_kjv where v = 83
union all select count(v) from t_kjv where v = 84
union all select count(v) from t_kjv where v = 85
union all select count(v) from t_kjv where v = 86
union all select count(v) from t_kjv where v = 87
union all select count(v) from t_kjv where v = 88
union all select count(v) from t_kjv where v = 89
union all select count(v) from t_kjv where v = 90
union all select count(v) from t_kjv where v = 91
union all select count(v) from t_kjv where v = 92
union all select count(v) from t_kjv where v = 93
union all select count(v) from t_kjv where v = 94
union all select count(v) from t_kjv where v = 95
union all select count(v) from t_kjv where v = 96
union all select count(v) from t_kjv where v = 97
union all select count(v) from t_kjv where v = 98
union all select count(v) from t_kjv where v = 99
union all select count(v) from t_kjv where v = 100
union all select count(v) from t_kjv where v = 101
union all select count(v) from t_kjv where v = 102
union all select count(v) from t_kjv where v = 103
union all select count(v) from t_kjv where v = 104
union all select count(v) from t_kjv where v = 105
union all select count(v) from t_kjv where v = 106
union all select count(v) from t_kjv where v = 107
union all select count(v) from t_kjv where v = 108
union all select count(v) from t_kjv where v = 109
union all select count(v) from t_kjv where v = 110
union all select count(v) from t_kjv where v = 111
union all select count(v) from t_kjv where v = 112
union all select count(v) from t_kjv where v = 113
union all select count(v) from t_kjv where v = 114
union all select count(v) from t_kjv where v = 115
union all select count(v) from t_kjv where v = 116
union all select count(v) from t_kjv where v = 117
union all select count(v) from t_kjv where v = 118
union all select count(v) from t_kjv where v = 119
union all select count(v) from t_kjv where v = 120
union all select count(v) from t_kjv where v = 121
union all select count(v) from t_kjv where v = 122
union all select count(v) from t_kjv where v = 123
union all select count(v) from t_kjv where v = 124
union all select count(v) from t_kjv where v = 125
union all select count(v) from t_kjv where v = 126
union all select count(v) from t_kjv where v = 127
union all select count(v) from t_kjv where v = 128
union all select count(v) from t_kjv where v = 129
union all select count(v) from t_kjv where v = 130
union all select count(v) from t_kjv where v = 131
union all select count(v) from t_kjv where v = 132
union all select count(v) from t_kjv where v = 133
union all select count(v) from t_kjv where v = 134
union all select count(v) from t_kjv where v = 135
union all select count(v) from t_kjv where v = 136
union all select count(v) from t_kjv where v = 137
union all select count(v) from t_kjv where v = 138
union all select count(v) from t_kjv where v = 139
union all select count(v) from t_kjv where v = 140
union all select count(v) from t_kjv where v = 141
union all select count(v) from t_kjv where v = 142
union all select count(v) from t_kjv where v = 143
union all select count(v) from t_kjv where v = 144
union all select count(v) from t_kjv where v = 145
union all select count(v) from t_kjv where v = 146
union all select count(v) from t_kjv where v = 147
union all select count(v) from t_kjv where v = 148
union all select count(v) from t_kjv where v = 149
union all select count(v) from t_kjv where v = 150
union all select count(v) from t_kjv where v = 151
union all select count(v) from t_kjv where v = 152
union all select count(v) from t_kjv where v = 153
union all select count(v) from t_kjv where v = 154
union all select count(v) from t_kjv where v = 155
union all select count(v) from t_kjv where v = 156
union all select count(v) from t_kjv where v = 157
union all select count(v) from t_kjv where v = 158
union all select count(v) from t_kjv where v = 159
union all select count(v) from t_kjv where v = 160
union all select count(v) from t_kjv where v = 161
union all select count(v) from t_kjv where v = 162
union all select count(v) from t_kjv where v = 163
union all select count(v) from t_kjv where v = 164
union all select count(v) from t_kjv where v = 165
union all select count(v) from t_kjv where v = 166
union all select count(v) from t_kjv where v = 167
union all select count(v) from t_kjv where v = 168
union all select count(v) from t_kjv where v = 169
union all select count(v) from t_kjv where v = 170
union all select count(v) from t_kjv where v = 171
union all select count(v) from t_kjv where v = 172
union all select count(v) from t_kjv where v = 173
union all select count(v) from t_kjv where v = 174
union all select count(v) from t_kjv where v = 175
union all select count(v) from t_kjv where v = 176
;
;
```

## Query database for number of verses in chapter

### Genesis

``` sql
select (select count(v) from bible.t_kjv where b = 1 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 1 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 1 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 1 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 1 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 1 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 1 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 1 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 1 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 1 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 1 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 1 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 1 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 1 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 1 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 1 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 1 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 1 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 1 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 1 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 1 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 1 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 1 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 1 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 1 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 1 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 1 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 1 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 1 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 1 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 1 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 1 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 1 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 1 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 1 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 1 and c = 36) as ch36,
(select count(v) from bible.t_kjv where b = 1 and c = 37) as ch37,
(select count(v) from bible.t_kjv where b = 1 and c = 38) as ch38,
(select count(v) from bible.t_kjv where b = 1 and c = 39) as ch39,
(select count(v) from bible.t_kjv where b = 1 and c = 40) as ch40,
(select count(v) from bible.t_kjv where b = 1 and c = 41) as ch41,
(select count(v) from bible.t_kjv where b = 1 and c = 42) as ch42,
(select count(v) from bible.t_kjv where b = 1 and c = 43) as ch43,
(select count(v) from bible.t_kjv where b = 1 and c = 44) as ch44,
(select count(v) from bible.t_kjv where b = 1 and c = 45) as ch45,
(select count(v) from bible.t_kjv where b = 1 and c = 46) as ch46,
(select count(v) from bible.t_kjv where b = 1 and c = 47) as ch47,
(select count(v) from bible.t_kjv where b = 1 and c = 48) as ch48,
(select count(v) from bible.t_kjv where b = 1 and c = 49) as ch49,
(select count(v) from bible.t_kjv where b = 1 and c = 50) as ch50
;
```

### Exodus

``` sql
select (select count(v) from bible.t_kjv where b = 2 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 2 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 2 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 2 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 2 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 2 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 2 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 2 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 2 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 2 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 2 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 2 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 2 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 2 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 2 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 2 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 2 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 2 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 2 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 2 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 2 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 2 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 2 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 2 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 2 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 2 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 2 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 2 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 2 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 2 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 2 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 2 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 2 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 2 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 2 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 2 and c = 36) as ch36,
(select count(v) from bible.t_kjv where b = 2 and c = 37) as ch37,
(select count(v) from bible.t_kjv where b = 2 and c = 38) as ch38,
(select count(v) from bible.t_kjv where b = 2 and c = 39) as ch39,
(select count(v) from bible.t_kjv where b = 2 and c = 40) as ch40
;
```

### Leviticus

``` sql
select (select count(v) from bible.t_kjv where b = 3 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 3 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 3 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 3 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 3 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 3 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 3 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 3 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 3 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 3 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 3 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 3 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 3 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 3 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 3 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 3 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 3 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 3 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 3 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 3 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 3 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 3 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 3 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 3 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 3 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 3 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 3 and c = 27) as ch27
;
```

### Numbers

``` sql
select (select count(v) from bible.t_kjv where b = 4 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 4 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 4 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 4 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 4 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 4 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 4 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 4 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 4 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 4 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 4 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 4 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 4 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 4 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 4 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 4 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 4 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 4 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 4 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 4 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 4 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 4 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 4 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 4 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 4 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 4 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 4 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 4 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 4 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 4 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 4 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 4 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 4 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 4 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 4 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 4 and c = 36) as ch36
;
```

### Deuteronomy

``` sql
select (select count(v) from bible.t_kjv where b = 5 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 5 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 5 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 5 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 5 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 5 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 5 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 5 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 5 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 5 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 5 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 5 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 5 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 5 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 5 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 5 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 5 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 5 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 5 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 5 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 5 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 5 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 5 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 5 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 5 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 5 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 5 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 5 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 5 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 5 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 5 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 5 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 5 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 5 and c = 34) as ch34
;
```

### Joshua

``` sql
select (select count(v) from bible.t_kjv where b = 6 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 6 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 6 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 6 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 6 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 6 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 6 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 6 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 6 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 6 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 6 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 6 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 6 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 6 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 6 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 6 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 6 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 6 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 6 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 6 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 6 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 6 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 6 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 6 and c = 24) as ch24
;
```

### Judges

``` sql
select (select count(v) from bible.t_kjv where b = 7 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 7 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 7 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 7 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 7 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 7 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 7 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 7 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 7 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 7 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 7 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 7 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 7 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 7 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 7 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 7 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 7 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 7 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 7 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 7 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 7 and c = 21) as ch21
;
```

### Ruth

``` sql
select (select count(v) from bible.t_kjv where b = 8 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 8 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 8 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 8 and c = 4) as ch4
;
```

### 1 Samuel

``` sql
select (select count(v) from bible.t_kjv where b = 9 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 9 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 9 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 9 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 9 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 9 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 9 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 9 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 9 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 9 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 9 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 9 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 9 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 9 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 9 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 9 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 9 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 9 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 9 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 9 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 9 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 9 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 9 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 9 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 9 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 9 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 9 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 9 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 9 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 9 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 9 and c = 31) as ch31
;
```

### 2 Samuel

``` sql
select (select count(v) from bible.t_kjv where b = 10 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 10 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 10 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 10 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 10 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 10 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 10 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 10 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 10 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 10 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 10 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 10 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 10 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 10 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 10 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 10 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 10 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 10 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 10 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 10 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 10 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 10 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 10 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 10 and c = 24) as ch24
;
```

### 1 Kings

``` sql
select (select count(v) from bible.t_kjv where b = 11 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 11 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 11 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 11 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 11 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 11 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 11 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 11 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 11 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 11 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 11 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 11 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 11 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 11 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 11 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 11 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 11 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 11 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 11 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 11 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 11 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 11 and c = 22) as ch22
;
```

### 2 Kings

``` sql
select (select count(v) from bible.t_kjv where b = 12 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 12 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 12 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 12 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 12 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 12 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 12 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 12 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 12 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 12 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 12 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 12 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 12 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 12 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 12 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 12 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 12 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 12 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 12 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 12 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 12 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 12 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 12 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 12 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 12 and c = 25) as ch25
;
```

### 1 Chronicles

``` sql
select (select count(v) from bible.t_kjv where b = 13 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 13 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 13 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 13 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 13 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 13 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 13 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 13 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 13 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 13 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 13 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 13 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 13 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 13 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 13 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 13 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 13 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 13 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 13 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 13 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 13 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 13 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 13 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 13 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 13 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 13 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 13 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 13 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 13 and c = 29) as ch29
;
```

### 2 Chronicles

``` sql
select (select count(v) from bible.t_kjv where b = 14 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 14 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 14 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 14 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 14 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 14 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 14 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 14 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 14 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 14 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 14 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 14 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 14 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 14 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 14 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 14 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 14 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 14 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 14 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 14 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 14 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 14 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 14 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 14 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 14 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 14 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 14 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 14 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 14 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 14 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 14 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 14 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 14 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 14 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 14 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 14 and c = 36) as ch36
;
```

### Ezra

``` sql
select (select count(v) from bible.t_kjv where b = 15 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 15 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 15 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 15 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 15 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 15 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 15 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 15 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 15 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 15 and c = 10) as ch10
;
```

### Nehemiah

``` sql
select (select count(v) from bible.t_kjv where b = 16 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 16 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 16 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 16 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 16 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 16 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 16 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 16 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 16 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 16 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 16 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 16 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 16 and c = 13) as ch13
;
```

### Esther

``` sql
select (select count(v) from bible.t_kjv where b = 17 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 17 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 17 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 17 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 17 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 17 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 17 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 17 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 17 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 17 and c = 10) as ch10
;
```

### Job

``` sql
select (select count(v) from bible.t_kjv where b = 18 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 18 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 18 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 18 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 18 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 18 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 18 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 18 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 18 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 18 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 18 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 18 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 18 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 18 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 18 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 18 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 18 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 18 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 18 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 18 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 18 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 18 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 18 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 18 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 18 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 18 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 18 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 18 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 18 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 18 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 18 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 18 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 18 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 18 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 18 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 18 and c = 36) as ch36,
(select count(v) from bible.t_kjv where b = 18 and c = 37) as ch37,
(select count(v) from bible.t_kjv where b = 18 and c = 38) as ch38,
(select count(v) from bible.t_kjv where b = 18 and c = 39) as ch39,
(select count(v) from bible.t_kjv where b = 18 and c = 40) as ch40,
(select count(v) from bible.t_kjv where b = 18 and c = 41) as ch41,
(select count(v) from bible.t_kjv where b = 18 and c = 42) as ch42
;
```

### Psalms

``` sql
select (select count(v) from bible.t_kjv where b = 19 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 19 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 19 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 19 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 19 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 19 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 19 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 19 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 19 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 19 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 19 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 19 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 19 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 19 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 19 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 19 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 19 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 19 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 19 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 19 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 19 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 19 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 19 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 19 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 19 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 19 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 19 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 19 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 19 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 19 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 19 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 19 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 19 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 19 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 19 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 19 and c = 36) as ch36,
(select count(v) from bible.t_kjv where b = 19 and c = 37) as ch37,
(select count(v) from bible.t_kjv where b = 19 and c = 38) as ch38,
(select count(v) from bible.t_kjv where b = 19 and c = 39) as ch39,
(select count(v) from bible.t_kjv where b = 19 and c = 40) as ch40,
(select count(v) from bible.t_kjv where b = 19 and c = 41) as ch41,
(select count(v) from bible.t_kjv where b = 19 and c = 42) as ch42,
(select count(v) from bible.t_kjv where b = 19 and c = 43) as ch43,
(select count(v) from bible.t_kjv where b = 19 and c = 44) as ch44,
(select count(v) from bible.t_kjv where b = 19 and c = 45) as ch45,
(select count(v) from bible.t_kjv where b = 19 and c = 46) as ch46,
(select count(v) from bible.t_kjv where b = 19 and c = 47) as ch47,
(select count(v) from bible.t_kjv where b = 19 and c = 48) as ch48,
(select count(v) from bible.t_kjv where b = 19 and c = 49) as ch49,
(select count(v) from bible.t_kjv where b = 19 and c = 50) as ch50,
(select count(v) from bible.t_kjv where b = 19 and c = 51) as ch51,
(select count(v) from bible.t_kjv where b = 19 and c = 52) as ch52,
(select count(v) from bible.t_kjv where b = 19 and c = 53) as ch53,
(select count(v) from bible.t_kjv where b = 19 and c = 54) as ch54,
(select count(v) from bible.t_kjv where b = 19 and c = 55) as ch55,
(select count(v) from bible.t_kjv where b = 19 and c = 56) as ch56,
(select count(v) from bible.t_kjv where b = 19 and c = 57) as ch57,
(select count(v) from bible.t_kjv where b = 19 and c = 58) as ch58,
(select count(v) from bible.t_kjv where b = 19 and c = 59) as ch59,
(select count(v) from bible.t_kjv where b = 19 and c = 60) as ch60,
(select count(v) from bible.t_kjv where b = 19 and c = 61) as ch61,
(select count(v) from bible.t_kjv where b = 19 and c = 62) as ch62,
(select count(v) from bible.t_kjv where b = 19 and c = 63) as ch63,
(select count(v) from bible.t_kjv where b = 19 and c = 64) as ch64,
(select count(v) from bible.t_kjv where b = 19 and c = 65) as ch65,
(select count(v) from bible.t_kjv where b = 19 and c = 66) as ch66,
(select count(v) from bible.t_kjv where b = 19 and c = 67) as ch67,
(select count(v) from bible.t_kjv where b = 19 and c = 68) as ch68,
(select count(v) from bible.t_kjv where b = 19 and c = 69) as ch69,
(select count(v) from bible.t_kjv where b = 19 and c = 70) as ch70,
(select count(v) from bible.t_kjv where b = 19 and c = 71) as ch71,
(select count(v) from bible.t_kjv where b = 19 and c = 72) as ch72,
(select count(v) from bible.t_kjv where b = 19 and c = 73) as ch73,
(select count(v) from bible.t_kjv where b = 19 and c = 74) as ch74,
(select count(v) from bible.t_kjv where b = 19 and c = 75) as ch75,
(select count(v) from bible.t_kjv where b = 19 and c = 76) as ch76,
(select count(v) from bible.t_kjv where b = 19 and c = 77) as ch77,
(select count(v) from bible.t_kjv where b = 19 and c = 78) as ch78,
(select count(v) from bible.t_kjv where b = 19 and c = 79) as ch79,
(select count(v) from bible.t_kjv where b = 19 and c = 80) as ch80,
(select count(v) from bible.t_kjv where b = 19 and c = 81) as ch81,
(select count(v) from bible.t_kjv where b = 19 and c = 82) as ch82,
(select count(v) from bible.t_kjv where b = 19 and c = 83) as ch83,
(select count(v) from bible.t_kjv where b = 19 and c = 84) as ch84,
(select count(v) from bible.t_kjv where b = 19 and c = 85) as ch85,
(select count(v) from bible.t_kjv where b = 19 and c = 86) as ch86,
(select count(v) from bible.t_kjv where b = 19 and c = 87) as ch87,
(select count(v) from bible.t_kjv where b = 19 and c = 88) as ch88,
(select count(v) from bible.t_kjv where b = 19 and c = 89) as ch89,
(select count(v) from bible.t_kjv where b = 19 and c = 90) as ch90,
(select count(v) from bible.t_kjv where b = 19 and c = 91) as ch91,
(select count(v) from bible.t_kjv where b = 19 and c = 92) as ch92,
(select count(v) from bible.t_kjv where b = 19 and c = 93) as ch93,
(select count(v) from bible.t_kjv where b = 19 and c = 94) as ch94,
(select count(v) from bible.t_kjv where b = 19 and c = 95) as ch95,
(select count(v) from bible.t_kjv where b = 19 and c = 96) as ch96,
(select count(v) from bible.t_kjv where b = 19 and c = 97) as ch97,
(select count(v) from bible.t_kjv where b = 19 and c = 98) as ch98,
(select count(v) from bible.t_kjv where b = 19 and c = 99) as ch99,
(select count(v) from bible.t_kjv where b = 19 and c = 100) as ch100,
(select count(v) from bible.t_kjv where b = 19 and c = 101) as ch101,
(select count(v) from bible.t_kjv where b = 19 and c = 102) as ch102,
(select count(v) from bible.t_kjv where b = 19 and c = 103) as ch103,
(select count(v) from bible.t_kjv where b = 19 and c = 104) as ch104,
(select count(v) from bible.t_kjv where b = 19 and c = 105) as ch105,
(select count(v) from bible.t_kjv where b = 19 and c = 106) as ch106,
(select count(v) from bible.t_kjv where b = 19 and c = 107) as ch107,
(select count(v) from bible.t_kjv where b = 19 and c = 108) as ch108,
(select count(v) from bible.t_kjv where b = 19 and c = 109) as ch109,
(select count(v) from bible.t_kjv where b = 19 and c = 110) as ch110,
(select count(v) from bible.t_kjv where b = 19 and c = 111) as ch111,
(select count(v) from bible.t_kjv where b = 19 and c = 112) as ch112,
(select count(v) from bible.t_kjv where b = 19 and c = 113) as ch113,
(select count(v) from bible.t_kjv where b = 19 and c = 114) as ch114,
(select count(v) from bible.t_kjv where b = 19 and c = 115) as ch115,
(select count(v) from bible.t_kjv where b = 19 and c = 116) as ch116,
(select count(v) from bible.t_kjv where b = 19 and c = 117) as ch117,
(select count(v) from bible.t_kjv where b = 19 and c = 118) as ch118,
(select count(v) from bible.t_kjv where b = 19 and c = 119) as ch119,
(select count(v) from bible.t_kjv where b = 19 and c = 120) as ch120,
(select count(v) from bible.t_kjv where b = 19 and c = 121) as ch121,
(select count(v) from bible.t_kjv where b = 19 and c = 122) as ch122,
(select count(v) from bible.t_kjv where b = 19 and c = 123) as ch123,
(select count(v) from bible.t_kjv where b = 19 and c = 124) as ch124,
(select count(v) from bible.t_kjv where b = 19 and c = 125) as ch125,
(select count(v) from bible.t_kjv where b = 19 and c = 126) as ch126,
(select count(v) from bible.t_kjv where b = 19 and c = 127) as ch127,
(select count(v) from bible.t_kjv where b = 19 and c = 128) as ch128,
(select count(v) from bible.t_kjv where b = 19 and c = 129) as ch129,
(select count(v) from bible.t_kjv where b = 19 and c = 130) as ch130,
(select count(v) from bible.t_kjv where b = 19 and c = 131) as ch131,
(select count(v) from bible.t_kjv where b = 19 and c = 132) as ch132,
(select count(v) from bible.t_kjv where b = 19 and c = 133) as ch133,
(select count(v) from bible.t_kjv where b = 19 and c = 134) as ch134,
(select count(v) from bible.t_kjv where b = 19 and c = 135) as ch135,
(select count(v) from bible.t_kjv where b = 19 and c = 136) as ch136,
(select count(v) from bible.t_kjv where b = 19 and c = 137) as ch137,
(select count(v) from bible.t_kjv where b = 19 and c = 138) as ch138,
(select count(v) from bible.t_kjv where b = 19 and c = 139) as ch139,
(select count(v) from bible.t_kjv where b = 19 and c = 140) as ch140,
(select count(v) from bible.t_kjv where b = 19 and c = 141) as ch141,
(select count(v) from bible.t_kjv where b = 19 and c = 142) as ch142,
(select count(v) from bible.t_kjv where b = 19 and c = 143) as ch143,
(select count(v) from bible.t_kjv where b = 19 and c = 144) as ch144,
(select count(v) from bible.t_kjv where b = 19 and c = 145) as ch145,
(select count(v) from bible.t_kjv where b = 19 and c = 146) as ch146,
(select count(v) from bible.t_kjv where b = 19 and c = 147) as ch147,
(select count(v) from bible.t_kjv where b = 19 and c = 148) as ch148,
(select count(v) from bible.t_kjv where b = 19 and c = 149) as ch149,
(select count(v) from bible.t_kjv where b = 19 and c = 150) as ch150
;
```

### Proverbs

``` sql
select (select count(v) from bible.t_kjv where b = 20 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 20 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 20 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 20 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 20 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 20 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 20 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 20 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 20 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 20 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 20 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 20 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 20 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 20 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 20 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 20 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 20 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 20 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 20 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 20 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 20 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 20 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 20 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 20 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 20 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 20 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 20 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 20 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 20 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 20 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 20 and c = 31) as ch31
;
```

### Ecclesiastes

``` sql
select (select count(v) from bible.t_kjv where b = 21 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 21 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 21 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 21 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 21 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 21 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 21 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 21 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 21 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 21 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 21 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 21 and c = 12) as ch12
;
```

### Song of Solomon

``` sql
select (select count(v) from bible.t_kjv where b = 22 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 22 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 22 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 22 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 22 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 22 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 22 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 22 and c = 8) as ch8
;
```

### Isaiah

``` sql
select (select count(v) from bible.t_kjv where b = 23 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 23 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 23 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 23 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 23 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 23 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 23 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 23 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 23 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 23 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 23 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 23 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 23 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 23 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 23 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 23 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 23 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 23 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 23 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 23 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 23 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 23 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 23 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 23 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 23 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 23 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 23 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 23 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 23 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 23 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 23 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 23 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 23 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 23 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 23 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 23 and c = 36) as ch36,
(select count(v) from bible.t_kjv where b = 23 and c = 37) as ch37,
(select count(v) from bible.t_kjv where b = 23 and c = 38) as ch38,
(select count(v) from bible.t_kjv where b = 23 and c = 39) as ch39,
(select count(v) from bible.t_kjv where b = 23 and c = 40) as ch40,
(select count(v) from bible.t_kjv where b = 23 and c = 41) as ch41,
(select count(v) from bible.t_kjv where b = 23 and c = 42) as ch42,
(select count(v) from bible.t_kjv where b = 23 and c = 43) as ch43,
(select count(v) from bible.t_kjv where b = 23 and c = 44) as ch44,
(select count(v) from bible.t_kjv where b = 23 and c = 45) as ch45,
(select count(v) from bible.t_kjv where b = 23 and c = 46) as ch46,
(select count(v) from bible.t_kjv where b = 23 and c = 47) as ch47,
(select count(v) from bible.t_kjv where b = 23 and c = 48) as ch48,
(select count(v) from bible.t_kjv where b = 23 and c = 49) as ch49,
(select count(v) from bible.t_kjv where b = 23 and c = 50) as ch50,
(select count(v) from bible.t_kjv where b = 23 and c = 51) as ch51,
(select count(v) from bible.t_kjv where b = 23 and c = 52) as ch52,
(select count(v) from bible.t_kjv where b = 23 and c = 53) as ch53,
(select count(v) from bible.t_kjv where b = 23 and c = 54) as ch54,
(select count(v) from bible.t_kjv where b = 23 and c = 55) as ch55,
(select count(v) from bible.t_kjv where b = 23 and c = 56) as ch56,
(select count(v) from bible.t_kjv where b = 23 and c = 57) as ch57,
(select count(v) from bible.t_kjv where b = 23 and c = 58) as ch58,
(select count(v) from bible.t_kjv where b = 23 and c = 59) as ch59,
(select count(v) from bible.t_kjv where b = 23 and c = 60) as ch60,
(select count(v) from bible.t_kjv where b = 23 and c = 61) as ch61,
(select count(v) from bible.t_kjv where b = 23 and c = 62) as ch62,
(select count(v) from bible.t_kjv where b = 23 and c = 63) as ch63,
(select count(v) from bible.t_kjv where b = 23 and c = 64) as ch64,
(select count(v) from bible.t_kjv where b = 23 and c = 65) as ch65,
(select count(v) from bible.t_kjv where b = 23 and c = 66) as ch66
;
```

### Jeremiah

``` sql
select (select count(v) from bible.t_kjv where b = 24 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 24 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 24 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 24 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 24 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 24 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 24 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 24 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 24 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 24 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 24 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 24 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 24 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 24 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 24 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 24 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 24 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 24 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 24 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 24 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 24 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 24 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 24 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 24 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 24 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 24 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 24 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 24 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 24 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 24 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 24 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 24 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 24 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 24 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 24 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 24 and c = 36) as ch36,
(select count(v) from bible.t_kjv where b = 24 and c = 37) as ch37,
(select count(v) from bible.t_kjv where b = 24 and c = 38) as ch38,
(select count(v) from bible.t_kjv where b = 24 and c = 39) as ch39,
(select count(v) from bible.t_kjv where b = 24 and c = 40) as ch40,
(select count(v) from bible.t_kjv where b = 24 and c = 41) as ch41,
(select count(v) from bible.t_kjv where b = 24 and c = 42) as ch42,
(select count(v) from bible.t_kjv where b = 24 and c = 43) as ch43,
(select count(v) from bible.t_kjv where b = 24 and c = 44) as ch44,
(select count(v) from bible.t_kjv where b = 24 and c = 45) as ch45,
(select count(v) from bible.t_kjv where b = 24 and c = 46) as ch46,
(select count(v) from bible.t_kjv where b = 24 and c = 47) as ch47,
(select count(v) from bible.t_kjv where b = 24 and c = 48) as ch48,
(select count(v) from bible.t_kjv where b = 24 and c = 49) as ch49,
(select count(v) from bible.t_kjv where b = 24 and c = 50) as ch50,
(select count(v) from bible.t_kjv where b = 24 and c = 51) as ch51,
(select count(v) from bible.t_kjv where b = 24 and c = 52) as ch52
;
```

### Lamentations

``` sql
select (select count(v) from bible.t_kjv where b = 25 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 25 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 25 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 25 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 25 and c = 5) as ch5
;
```

### Ezekiel

``` sql
select (select count(v) from bible.t_kjv where b = 26 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 26 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 26 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 26 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 26 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 26 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 26 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 26 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 26 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 26 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 26 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 26 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 26 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 26 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 26 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 26 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 26 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 26 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 26 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 26 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 26 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 26 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 26 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 26 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 26 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 26 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 26 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 26 and c = 28) as ch28,
(select count(v) from bible.t_kjv where b = 26 and c = 29) as ch29,
(select count(v) from bible.t_kjv where b = 26 and c = 30) as ch30,
(select count(v) from bible.t_kjv where b = 26 and c = 31) as ch31,
(select count(v) from bible.t_kjv where b = 26 and c = 32) as ch32,
(select count(v) from bible.t_kjv where b = 26 and c = 33) as ch33,
(select count(v) from bible.t_kjv where b = 26 and c = 34) as ch34,
(select count(v) from bible.t_kjv where b = 26 and c = 35) as ch35,
(select count(v) from bible.t_kjv where b = 26 and c = 36) as ch36,
(select count(v) from bible.t_kjv where b = 26 and c = 37) as ch37,
(select count(v) from bible.t_kjv where b = 26 and c = 38) as ch38,
(select count(v) from bible.t_kjv where b = 26 and c = 39) as ch39,
(select count(v) from bible.t_kjv where b = 26 and c = 40) as ch40,
(select count(v) from bible.t_kjv where b = 26 and c = 41) as ch41,
(select count(v) from bible.t_kjv where b = 26 and c = 42) as ch42,
(select count(v) from bible.t_kjv where b = 26 and c = 43) as ch43,
(select count(v) from bible.t_kjv where b = 26 and c = 44) as ch44,
(select count(v) from bible.t_kjv where b = 26 and c = 45) as ch45,
(select count(v) from bible.t_kjv where b = 26 and c = 46) as ch46,
(select count(v) from bible.t_kjv where b = 26 and c = 47) as ch47,
(select count(v) from bible.t_kjv where b = 26 and c = 48) as ch48
;
```

### Daniel

``` sql
select (select count(v) from bible.t_kjv where b = 27 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 27 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 27 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 27 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 27 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 27 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 27 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 27 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 27 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 27 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 27 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 27 and c = 12) as ch12
;
```

### Hosea

``` sql
select (select count(v) from bible.t_kjv where b = 28 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 28 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 28 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 28 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 28 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 28 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 28 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 28 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 28 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 28 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 28 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 28 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 28 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 28 and c = 14) as ch14
;
```

### Joel

``` sql
select (select count(v) from bible.t_kjv where b = 29 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 29 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 29 and c = 3) as ch3
;
```

### Amos

``` sql
select (select count(v) from bible.t_kjv where b = 30 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 30 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 30 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 30 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 30 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 30 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 30 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 30 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 30 and c = 9) as ch9
;
```

### Obadiah

``` sql
select (select count(v) from bible.t_kjv where b = 31 and c = 1) as ch1
;
```

### Jonah

``` sql
select (select count(v) from bible.t_kjv where b = 32 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 32 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 32 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 32 and c = 4) as ch4
;
```

### Micah

``` sql
select (select count(v) from bible.t_kjv where b = 33 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 33 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 33 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 33 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 33 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 33 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 33 and c = 7) as ch7
;
```

### Nahum

``` sql
select (select count(v) from bible.t_kjv where b = 34 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 34 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 34 and c = 3) as ch3
;
```

### Habakkuk

``` sql
select (select count(v) from bible.t_kjv where b = 35 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 35 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 35 and c = 3) as ch3
;
```

### Zephaniah

``` sql
select (select count(v) from bible.t_kjv where b = 36 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 36 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 36 and c = 3) as ch3
;
```

### Haggai

``` sql
select (select count(v) from bible.t_kjv where b = 37 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 37 and c = 2) as ch2
;
```

### Zechariah

``` sql
select (select count(v) from bible.t_kjv where b = 38 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 38 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 38 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 38 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 38 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 38 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 38 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 38 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 38 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 38 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 38 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 38 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 38 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 38 and c = 14) as ch14
;
```

### Malachi

``` sql
select (select count(v) from bible.t_kjv where b = 39 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 39 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 39 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 39 and c = 4) as ch4
;
```

### Matthew

``` sql
select (select count(v) from bible.t_kjv where b = 40 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 40 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 40 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 40 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 40 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 40 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 40 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 40 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 40 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 40 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 40 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 40 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 40 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 40 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 40 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 40 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 40 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 40 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 40 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 40 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 40 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 40 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 40 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 40 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 40 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 40 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 40 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 40 and c = 28) as ch28
;
```

### Mark

``` sql
select (select count(v) from bible.t_kjv where b = 41 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 41 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 41 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 41 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 41 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 41 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 41 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 41 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 41 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 41 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 41 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 41 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 41 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 41 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 41 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 41 and c = 16) as ch16
;
```

### Luke

``` sql
select (select count(v) from bible.t_kjv where b = 42 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 42 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 42 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 42 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 42 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 42 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 42 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 42 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 42 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 42 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 42 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 42 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 42 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 42 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 42 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 42 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 42 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 42 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 42 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 42 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 42 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 42 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 42 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 42 and c = 24) as ch24
;
```

### John

``` sql
select (select count(v) from bible.t_kjv where b = 43 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 43 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 43 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 43 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 43 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 43 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 43 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 43 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 43 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 43 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 43 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 43 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 43 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 43 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 43 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 43 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 43 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 43 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 43 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 43 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 43 and c = 21) as ch21
;
```

### Acts

``` sql
select (select count(v) from bible.t_kjv where b = 44 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 44 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 44 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 44 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 44 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 44 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 44 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 44 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 44 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 44 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 44 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 44 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 44 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 44 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 44 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 44 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 44 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 44 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 44 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 44 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 44 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 44 and c = 22) as ch22,
(select count(v) from bible.t_kjv where b = 44 and c = 23) as ch23,
(select count(v) from bible.t_kjv where b = 44 and c = 24) as ch24,
(select count(v) from bible.t_kjv where b = 44 and c = 25) as ch25,
(select count(v) from bible.t_kjv where b = 44 and c = 26) as ch26,
(select count(v) from bible.t_kjv where b = 44 and c = 27) as ch27,
(select count(v) from bible.t_kjv where b = 44 and c = 28) as ch28
;
```

### Romans

``` sql
select (select count(v) from bible.t_kjv where b = 45 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 45 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 45 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 45 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 45 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 45 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 45 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 45 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 45 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 45 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 45 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 45 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 45 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 45 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 45 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 45 and c = 16) as ch16
;
```

### 1 Corinthians

``` sql
select (select count(v) from bible.t_kjv where b = 46 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 46 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 46 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 46 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 46 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 46 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 46 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 46 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 46 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 46 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 46 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 46 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 46 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 46 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 46 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 46 and c = 16) as ch16
;
```

### 2 Corinthians

``` sql
select (select count(v) from bible.t_kjv where b = 47 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 47 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 47 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 47 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 47 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 47 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 47 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 47 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 47 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 47 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 47 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 47 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 47 and c = 13) as ch13
;
```

### Galatians

``` sql
select (select count(v) from bible.t_kjv where b = 48 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 48 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 48 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 48 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 48 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 48 and c = 6) as ch6
;
```

### Ephesians

``` sql
select (select count(v) from bible.t_kjv where b = 49 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 49 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 49 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 49 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 49 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 49 and c = 6) as ch6
;
```

### Philippians

``` sql
select (select count(v) from bible.t_kjv where b = 50 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 50 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 50 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 50 and c = 4) as ch4
;
```

### Colossians

``` sql
select (select count(v) from bible.t_kjv where b = 51 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 51 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 51 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 51 and c = 4) as ch4
;
```

### 1 Thessalonians

``` sql
select (select count(v) from bible.t_kjv where b = 52 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 52 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 52 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 52 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 52 and c = 5) as ch5
;
```

### 2 Thessalonians

``` sql
select (select count(v) from bible.t_kjv where b = 53 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 53 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 53 and c = 3) as ch3
;
```

### 1 Timothy

``` sql
select (select count(v) from bible.t_kjv where b = 54 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 54 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 54 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 54 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 54 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 54 and c = 6) as ch6
;
```

### 2 Timothy

``` sql
select (select count(v) from bible.t_kjv where b = 55 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 55 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 55 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 55 and c = 4) as ch4
;
```

### Titus

``` sql
select (select count(v) from bible.t_kjv where b = 56 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 56 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 56 and c = 3) as ch3
;
```

### Philemon

``` sql
select (select count(v) from bible.t_kjv where b = 57 and c = 1) as ch1
;
```

### Hebrews

``` sql
select (select count(v) from bible.t_kjv where b = 58 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 58 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 58 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 58 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 58 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 58 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 58 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 58 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 58 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 58 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 58 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 58 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 58 and c = 13) as ch13
;
```

### James

``` sql
select (select count(v) from bible.t_kjv where b = 59 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 59 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 59 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 59 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 59 and c = 5) as ch5
;
```

### 1 Peter

``` sql
select (select count(v) from bible.t_kjv where b = 60 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 60 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 60 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 60 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 60 and c = 5) as ch5
;
```

### 2 Peter

``` sql
select (select count(v) from bible.t_kjv where b = 61 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 61 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 61 and c = 3) as ch3
;
```

### 1 John

``` sql
select (select count(v) from bible.t_kjv where b = 62 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 62 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 62 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 62 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 62 and c = 5) as ch5
;
```

### 2 John

``` sql
select (select count(v) from bible.t_kjv where b = 63 and c = 1) as ch1
;
```

### 3 John

``` sql
select (select count(v) from bible.t_kjv where b = 64 and c = 1) as ch1
;
```

### Jude

``` sql
select (select count(v) from bible.t_kjv where b = 65 and c = 1) as ch1
;
```

### Revelation

``` sql
select (select count(v) from bible.t_kjv where b = 66 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 66 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 66 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 66 and c = 4) as ch4,
(select count(v) from bible.t_kjv where b = 66 and c = 5) as ch5,
(select count(v) from bible.t_kjv where b = 66 and c = 6) as ch6,
(select count(v) from bible.t_kjv where b = 66 and c = 7) as ch7,
(select count(v) from bible.t_kjv where b = 66 and c = 8) as ch8,
(select count(v) from bible.t_kjv where b = 66 and c = 9) as ch9,
(select count(v) from bible.t_kjv where b = 66 and c = 10) as ch10,
(select count(v) from bible.t_kjv where b = 66 and c = 11) as ch11,
(select count(v) from bible.t_kjv where b = 66 and c = 12) as ch12,
(select count(v) from bible.t_kjv where b = 66 and c = 13) as ch13,
(select count(v) from bible.t_kjv where b = 66 and c = 14) as ch14,
(select count(v) from bible.t_kjv where b = 66 and c = 15) as ch15,
(select count(v) from bible.t_kjv where b = 66 and c = 16) as ch16,
(select count(v) from bible.t_kjv where b = 66 and c = 17) as ch17,
(select count(v) from bible.t_kjv where b = 66 and c = 18) as ch18,
(select count(v) from bible.t_kjv where b = 66 and c = 19) as ch19,
(select count(v) from bible.t_kjv where b = 66 and c = 20) as ch20,
(select count(v) from bible.t_kjv where b = 66 and c = 21) as ch21,
(select count(v) from bible.t_kjv where b = 66 and c = 22) as ch22
;
```
