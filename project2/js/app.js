const accessKey = '05eda655830de5fdf3ba53afea1fc41b'

let _dataRates 

const loadData = async () => {
  const result = await fetch(`http://api.coinlayer.com/live?access_key=${accessKey}`)

  _dataRates = await result.json()
}

const renderData = async () => {
  const from_select = document.getElementById('from')
  const to_select = document.getElementById('to')

  const amountFrom = document.getElementById('amount')
  const convertedTo = document.getElementById('converted-to')

  Object.keys(_dataRates.rates).forEach((crypto) => {
    const optionForFrom = document.createElement('option')
    const optionForTo = document.createElement('option')
    optionForFrom.text = crypto
    optionForFrom.value = crypto
  
    optionForTo.text = crypto
    optionForTo.value = crypto

    from_select.add(optionForFrom)
    to_select.add(optionForTo)
  })

  from_select.value = 'BTC'
  to_select.value = 'ETH'

  const convert = () => {
    const fromCurrency = from_select.value
    const toCurrency = to_select.value
    const amount = amountFrom.value

    const amountInUSD = _dataRates.rates[fromCurrency] * amount
    const toAmountRateInUSD = _dataRates.rates[toCurrency]

    if (toAmountRateInUSD !== 0) {
      const convertedAmount = amountInUSD / toAmountRateInUSD
      convertedTo.value = convertedAmount
    } else {
      convertedTo.value = 0
    }
  }

  amount.addEventListener('input', convert)

  from_select.addEventListener('change', convert)
  to_select.addEventListener('change', convert)
}

const main = async () => {
  await loadData()
  renderData()
}

main()