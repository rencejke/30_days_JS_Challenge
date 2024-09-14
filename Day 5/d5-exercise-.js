//level 3

//Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortAges = ages.sort()
console.log(sortAges)

//we cant directly use Math.min() to get the minimum value of an array we need to use a destructuring assignment 
console.log(Math.min(...ages))
console.log(Math.max(...ages))


//Find the median age(one middle item or two middle items divided by two)
const ages2 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const median = ages2[4] + ages2[5]  
console.log(median / 2) //22.5


//Find the average age(all items divided by number of items)
const ages3 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sum = ages3[0] + ages3[1] + ages3[2] + ages3[3] + ages3[4] + ages3[5] + ages3[6] + ages3[7] + ages3[8] + ages3[9]
const average = sum / ages3.length
console.log(average) // 22.8



const ages4 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Find the range of the ages(max minus min)
const range = Math.max(...ages4) - Math.min(...ages4)
                //19                 //26
console.log(range) //7


//compare the value of (min - average) and (max - average)

const ages5 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sum2 = ages5[0] + ages5[1] + ages5[2] + ages5[3] + ages5[4] + ages5[5] + ages5[6] + ages5[7] + ages5[8] + ages5[9]
const average2 = sum2 / ages5.length

//Math.abs returns the absolute value so it always positive
let compare1 = Math.abs(Math.min(...ages5) - average2)
let compare2 = Math.abs(Math.max(...ages5) - average2)

 console.log(compare1) //3.8000000000000007
 console.log(compare2) // 3.1999999999999993


 //find the middle country
 const countries2 = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]//193 (count)
  
  const count = countries2.length / 2 //96,5
  const roundUp = Math.ceil(count) // 97
  
  console.log(countries2[roundUp]) //Liberia is in the middle
  

  //Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
   
  const firstHalf = countries2.slice(0,96)  //.slice(Math.ceil(countries2.length / 2))
  const secondHalf = countries2.slice(96, 193)
  
  
  //1st half and second half
  console.log(firstHalf)
  console.log(secondHalf)
  
  if(secondHalf > firstHalf)
  {  
      //add  the  extra item of secondhalf to the  first half
      const extraItem = secondHalf.shift()
      firstHalf.push(extraItem)
      console.log(firstHalf)
      
  }
  else{
      console.log('Array is equal')
  }

   



    








