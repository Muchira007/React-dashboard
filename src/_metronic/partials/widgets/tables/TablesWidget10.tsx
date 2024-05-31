import { FC, useState } from 'react'
import { KTIcon } from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget10: FC<Props> = ({ className }) => {
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([
    { name: 'Maize Seedlings', description: 'Disease-resistant maize seeds, Hybrid seeds', price: 1000 },
    { name: 'Wheat Seedlings', description: 'Disease-resistant wheat seeds, Hybrid seeds', price: 1500 },
    { name: 'Nitrogen Fertilizer', description: 'Urea, Ammonium Nitrate', price: 2000 },
    { name: 'Herbicides', description: 'Glyphosate, Atrazine', price: 1200 },
    { name: 'Pesticides', description: 'Organophosphates, Pyrethroids', price: 1800 }
  ])
  const [newItem, setNewItem] = useState({ name: '', description: '', price: 0 })

  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setNewItem(prevState => ({
      ...prevState,
      [id]: id === 'price' ? parseFloat(value) : value
    }))
  }

  const handleAddItem = () => {
    setItems(prevItems => [...prevItems, newItem])
    setNewItem({ name: '', description: '', price: 0 })
    handleCloseModal()
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Voucher</span>
          <span className='text-muted mt-1 fw-semibold fs-7'></span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <button
            type='button'
            className='btn btn-sm btn-light-primary'
            onClick={handleShowModal}
          >
            <KTIcon iconName='plus' className='fs-3' />
            New Item
          </button>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Item</th>
                <th className='min-w-120px'></th>
                <th className='min-w-100px'></th>
                <th className='min-w-150px text-end'>Price</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'></div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                          {item.name}
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'></div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <p>{item.price} KES</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* end::Body */}

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Item</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Item Name</label>
                    <input type="text" className="form-control" id="name" value={newItem.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" value={newItem.description} onChange={handleChange}></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="price" value={newItem.price} onChange={handleChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleAddItem}>Save</button>
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { TablesWidget10 }

// import { FC } from 'react'
// import {KTIcon, toAbsoluteUrl} from '../../../helpers'

// type Props = {
//   className: string
// }

// const TablesWidget10: FC<Props> = ({className}) => {
//   return (
//     <div className={`card ${className}`}>
//       {/* begin::Header */}
//       <div className='card-header border-0 pt-5'>
//         <h3 className='card-title align-items-start flex-column'>
//           <span className='card-label fw-bold fs-3 mb-1'>Voucher</span>
//           <span className='text-muted mt-1 fw-semibold fs-7'></span>
//         </h3>
//         <div
//           className='card-toolbar'
//           data-bs-toggle='tooltip'
//           data-bs-placement='top'
//           data-bs-trigger='hover'
//           title='Click to add a user'
//         >
//           <a
//             href='#'
//             className='btn btn-sm btn-light-primary'
//             // data-bs-toggle='modal'
//             // data-bs-target='#kt_modal_invite_friends'
//           >
//             <KTIcon iconName='plus' className='fs-3' />
//             New Item
//           </a>
//         </div>
//       </div>
//       {/* end::Header */}
//       {/* begin::Body */}
//       <div className='card-body py-3'>
//         {/* begin::Table container */}
//         <div className='table-responsive'>
//           {/* begin::Table */}
//           <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
//             {/* begin::Table head */}
//             <thead>
//               <tr className='fw-bold text-muted'>
//                 <th className='w-25px'>
//                   <div className='form-check form-check-sm form-check-custom form-check-solid'>
//                     <input
//                       className='form-check-input'
//                       type='checkbox'
//                       value='1'
//                       data-kt-check='true'
//                       data-kt-check-target='.widget-9-check'
//                     />
//                   </div>
//                 </th>
//                 <th className='min-w-150px'>Item</th>
//                 <th className='min-w-120px'></th>
//                 <th className='min-w-100px'></th>
//                 <th className='min-w-150px text-end'>Price</th>
//               </tr>
//             </thead>
//             {/* end::Table head */}
//             {/* begin::Table body */}
//             <tbody>y
//               <tr>
//                 <td>
//                   <div className='form-check form-check-sm form-check-custom form-check-solid'>
//                     <input className='form-check-input widget-9-check' type='checkbox' value='1' />
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex align-items-center'>
//                     <div className='symbol symbol-45px me-5'>
//                       {/* <img src={toAbsoluteUrl('media/avatars/300-14.jpg')} alt='' /> */}
//                     </div>
//                     <div className='d-flex justify-content-start flex-column'>
//                       <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
//                         Maize Seedlings
//                       </a>
//                       <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                       Disease-resistant maize seeds, Hybrid seeds
//                       </span>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   {/* <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
//                   Nakuru
//                   </a>
//                   <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                    Menengai Region
//                   </span> */}
//                 </td>
//                 <td className='text-end'>
//                   <div className='d-flex flex-column w-100 me-2'>
//                     {/* <div className='d-flex flex-stack mb-2'>
//                       <span className='text-muted me-2 fs-7 fw-semibold'>50%</span>
//                     </div> */}
//                     {/* <div className='progress h-6px w-100'>
//                       <div
//                         className='progress-bar bg-primary'
//                         role='progressbar'
//                         style={{width: '50%'}}
//                       ></div>
//                     </div> */}
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex justify-content-end flex-shrink-0'>
//                     {/* <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='switch' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='pencil' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
//                     >
//                       <KTIcon iconName='trash' className='fs-3' />
//                     </a> */}
//                   <p>1000 KES</p>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className='form-check form-check-sm form-check-custom form-check-solid'>
//                     <input className='form-check-input widget-9-check' type='checkbox' value='1' />
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex align-items-center'>
//                     <div className='symbol symbol-45px me-5'>
//                       {/* <img src={toAbsoluteUrl('media/avatars/300-2.jpg')} alt='' /> */}
//                     </div>
//                     <div className='d-flex justify-content-start flex-column'>
//                       <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
//                         Lemayan Charles
//                       </a>
//                       <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                         Cereal Farming, Legume Farming &amp; Cattle Farming
//                       </span>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
//                     Narok
//                   </a>
//                   <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                     Oloitok
//                   </span>
//                 </td>
//                 <td className='text-end'>
//                   <div className='d-flex flex-column w-100 me-2'>
//                     <div className='d-flex flex-stack mb-2'>
//                       <span className='text-muted me-2 fs-7 fw-semibold'>70%</span>
//                     </div>
//                     <div className='progress h-6px w-100'>
//                       <div
//                         className='progress-bar bg-danger'
//                         role='progressbar'
//                         style={{width: '70%'}}
//                       ></div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex justify-content-end flex-shrink-0'>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='switch' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='pencil' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
//                     >
//                       <KTIcon iconName='trash' className='fs-3' />
//                     </a>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className='form-check form-check-sm form-check-custom form-check-solid'>
//                     <input className='form-check-input widget-9-check' type='checkbox' value='1' />
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex align-items-center'>
//                     <div className='symbol symbol-45px me-5'>
//                       {/* <img src={toAbsoluteUrl('media/avatars/300-5.jpg')} alt='' /> */}
//                     </div>
//                     <div className='d-flex justify-content-start flex-column'>
//                       <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
//                         Roy Kipletin
//                       </a>
//                       <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                         Legume Farming, Vegetable Farming &amp; Poultry Farming
//                       </span>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
//                     Eldoret
//                   </a>
//                   <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                     Chamgei
//                   </span>
//                 </td>
//                 <td className='text-end'>
//                   <div className='d-flex flex-column w-100 me-2'>
//                     <div className='d-flex flex-stack mb-2'>
//                       <span className='text-muted me-2 fs-7 fw-semibold'>60%</span>
//                     </div>
//                     <div className='progress h-6px w-100'>
//                       <div
//                         className='progress-bar bg-success'
//                         role='progressbar'
//                         style={{width: '60%'}}
//                       ></div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex justify-content-end flex-shrink-0'>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='switch' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='pencil' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
//                     >
//                       <KTIcon iconName='trash' className='fs-3' />
//                     </a>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className='form-check form-check-sm form-check-custom form-check-solid'>
//                     <input className='form-check-input widget-9-check' type='checkbox' value='1' />
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex align-items-center'>
//                     <div className='symbol symbol-45px me-5'>
//                       {/* <img src={toAbsoluteUrl('media/avatars/300-20.jpg')} alt='' /> */}
//                     </div>
//                     <div className='d-flex justify-content-start flex-column'>
//                       <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
//                         Natali Wanjiru
//                       </a>
//                       <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                         Poultry Farming
//                       </span>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
//                     Muranga
//                   </a>
//                   <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                     Kenol
//                   </span>
//                 </td>
//                 <td className='text-end'>
//                   <div className='d-flex flex-column w-100 me-2'>
//                     <div className='d-flex flex-stack mb-2'>
//                       <span className='text-muted me-2 fs-7 fw-semibold'>50%</span>
//                     </div>
//                     <div className='progress h-6px w-100'>
//                       <div
//                         className='progress-bar bg-warning'
//                         role='progressbar'
//                         style={{width: '50%'}}
//                       ></div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex justify-content-end flex-shrink-0'>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='switch' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='pencil' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
//                     >
//                       <KTIcon iconName='trash' className='fs-3' />
//                     </a>
//                   </div>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className='form-check form-check-sm form-check-custom form-check-solid'>
//                     <input className='form-check-input widget-9-check' type='checkbox' value='1' />
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex align-items-center'>
//                     <div className='symbol symbol-45px me-5'>
//                       {/* <img src={toAbsoluteUrl('media/avatars/300-23.jpg')} alt='' /> */}
//                     </div>
//                     <div className='d-flex justify-content-start flex-column'>
//                       <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
//                         Kevin Osumba
//                       </a>
//                       <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                         Fish farming &amp; Horticulture
//                       </span>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
//                     Kisumu
//                   </a>
//                   <span className='text-muted fw-semibold text-muted d-block fs-7'>
//                     Bondo
//                   </span>
//                 </td>
//                 <td className='text-end'>
//                   <div className='d-flex flex-column w-100 me-2'>
//                     <div className='d-flex flex-stack mb-2'>
//                       <span className='text-muted me-2 fs-7 fw-semibold'>90%</span>
//                     </div>
//                     <div className='progress h-6px w-100'>
//                       <div
//                         className='progress-bar bg-info'
//                         role='progressbar'
//                         style={{width: '90%'}}
//                       ></div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <div className='d-flex justify-content-end flex-shrink-0'>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='switch' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
//                     >
//                       <KTIcon iconName='pencil' className='fs-3' />
//                     </a>
//                     <a
//                       href='#'
//                       className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
//                     >
//                       <KTIcon iconName='trash' className='fs-3' />
//                     </a>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//             {/* end::Table body */}
//           </table>
//           {/* end::Table */}
//         </div>
//         {/* end::Table container */}
//       </div>
//       {/* begin::Body */}
//     </div>
//   )
// }

// export {TablesWidget10}
