import React from 'react'
import TariffsTable from '../components/TariffsTable'
import Spinner from '../components/Spinner'
import AdditionalServices from '../components/AdditionalServices'
import useGetTariffs from '../http/react-query/tariffs/useGetTariffs.js'
import useGetServices from '../http/react-query/tariffs/useGetServices.js'
import Helmet from '../components/Helmet'
import ServerError from '../components/ServerError'

const Tariffs = () => {
  const tariffs = useGetTariffs()
  const services = useGetServices()

  if (tariffs.isLoading || services.isLoading) return <Spinner />
  if (tariffs.isError || services.isError) return <ServerError />

  return (
    <>
      <Helmet title="Тарифы" description="Тарифы сети Powernet" />

      <TariffsTable tarrifsActual={tariffs.data} />
      <AdditionalServices additionalServic={services.data} />
    </>
  )
}

export default Tariffs
