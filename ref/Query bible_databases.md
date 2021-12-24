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
(select count(v) from bible.t_kjv where b = 2 and c = 27) as ch27
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
```

### Ruth

``` sql
select (select count(v) from bible.t_kjv where b = 8 and c = 1) as ch1,
(select count(v) from bible.t_kjv where b = 8 and c = 2) as ch2,
(select count(v) from bible.t_kjv where b = 8 and c = 3) as ch3,
(select count(v) from bible.t_kjv where b = 8 and c = 4) as ch4
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
```
