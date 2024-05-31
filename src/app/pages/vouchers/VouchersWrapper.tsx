import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  TablesWidget10,
} from '../../../_metronic/partials/widgets'

const Vouchers = () => {
  const intl = useIntl()
  
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      {/* begin::Row */}
      <div className='row gy-5 gx-xl-8'>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className='col-xl-8'>
          <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      </div>
      {/* end::Row */}
    </>
  )
}

export {Vouchers}
