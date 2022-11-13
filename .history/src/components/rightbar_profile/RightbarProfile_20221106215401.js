import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { country } from '../common/dataCountries'
import ChangeAvatarModal from '../modals/ChangeAvatarModal'
import { getUserById, updateUserInfo } from '../../app/features/authSlice'
import { toast } from 'react-toastify'

export default function Rightbar_Profile() {
  const { userInfo } = useSelector((state) => state.auth)
  const { register, handleSubmit } = useForm()
  const imgSourceRef = useRef()
  const dateRef = useRef()
  const [isOpen, isOpenModal] = useState(false)
  const emailRef = useRef()
  const dispatch = useDispatch()
  const [avatar, setAvatar] = useState(userInfo?.user?.profilePicture)

  const _id = userInfo?.user?._id

  const onSubmit = ({ name, from }) => {
    const user = {
      _id,
      name,
      email: emailRef.current.value,
      from,
      profilePicture: imgSourceRef.current.currentSrc,
      dateOfBirth: dateRef.current.value,
    }
    dispatch(updateUserInfo({ user, toast }))
    dispatch(getUserById())
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mr-32 basis-10/12'
      style={{ height: '700px' }}
    >
      <div className='mt-2 mb-3 text-xl'>Thông tin tài khoản</div>
      <div>
        <div className='flex text-sm formProfile'>
          <div
            className='p-4 bg-white basis-3/5 border border-dashed border-[#dcdcdc]'
            style={{ height: '500px' }}
          >
            <div className='text-lg'>Thông tin cá nhân</div>

            {/* Nickname-Name Section */}
            <div className='flex'>
              <div className='flex-col'>
                <img
                  className='mx-auto my-4 border-4 h-28 w-28 border-[#64AA86]'
                  style={{ borderRadius: '50%' }}
                  src={avatar}
                  alt=''
                  ref={imgSourceRef}
                ></img>

                <button
                  type='button'
                  className='px-2 text-white bg-[#008641] border rounded-lg w-fit h-9'
                  onClick={() => {
                    isOpenModal(true)
                  }}
                >
                  Thay đổi avatar
                </button>
                {isOpen && (
                  <ChangeAvatarModal
                    isOpen={isOpenModal}
                    changeAvatar={setAvatar}
                  />
                )}
              </div>
              <div className='flex-col mt-4 mb-4 basis-3/4 '>
                <div className='flex justify-evenly mt-1 ml-3'>
                  <label className='p-2' htmlFor='name'>
                    Họ &amp; tên
                  </label>
                  <input
                    className='p-2 mr-3 border-2 rounded-md border-slate-200 focus:border-blue-300'
                    type='text'
                    name=''
                    id='name'
                    {...register('name')}
                    placeholder='Thêm họ tên'
                    defaultValue={`${userInfo?.user?.name}`}
                  />
                </div>

                <div className='flex justify-around ml-3 mt-9'>
                  <label className='p-2' htmlFor='nickname'>
                    Nickname
                  </label>
                  <input
                    className='p-2 mr-3 border-2 rounded-md border-slate-200 focus:border-blue-300'
                    type='text'
                    name=''
                    id='nickname'
                    placeholder='Thêm nickname'
                    maxLength={128}
                    defaultValue={''}
                    {...register('NickName')}
                  />
                </div>
              </div>
            </div>

            <div className='flex justify-center w-full'>
              <button
                className='px-2 text-white bg-[#008641] border rounded-lg w-fit h-9 '
                type='submit'
              >
                Lưu thay đổi
              </button>
            </div>
          </div>

          <div className='flex-col p-4 ml-1 bg-white basis-2/5 h-[500px] border border-dashed border-[#dcdcdc]'>
            <div className='flex justify-between flex-1 my-5'>
              <div className='flex'>
                <img
                  className='w-8 h-8 '
                  src='https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png'
                  alt=''
                ></img>
                <div className='flex-col ml-2'>
                  <div>Địa chỉ email</div>
                  <input
                    type='text'
                    disabled='disabled'
                    className='disabled:bg-white'
                    defaultValue={`${userInfo?.user?.email}`}
                    ref={emailRef}
                  />
                </div>
              </div>
              <NavLink
                to='/profile/edit-email'
                className='flex items-center justify-center w-20 text-blue-500 border border-blue-500 rounded-md h-9'
              >
                <div>Cập nhật</div>
              </NavLink>
            </div>

            <div className='text-base'>Bảo mật</div>
            <div className='flex justify-between flex-1 my-5'>
              <div className='flex'>
                <img
                  className='w-8 h-8 '
                  src='https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png'
                  alt=''
                ></img>
                <div className='my-auto ml-2'>Thiết lập mật khẩu</div>
              </div>
              <NavLink
                to='/profile/edit-password'
                className='flex items-center justify-center w-20 text-blue-500 border border-blue-500 rounded-md h-9'
              >
                <div>Cập nhật</div>
              </NavLink>
            </div>

            <div className='text-base'>Liên kết mạng xã hội</div>
            <div className='flex justify-between flex-1 my-5'>
              <div className='flex'>
                <img
                  className='w-8 h-8 '
                  src='https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png'
                  alt=''
                ></img>
                <div className='my-auto ml-2'>Facebook</div>
              </div>
              <button
                type='button'
                className='w-20 text-blue-500 border border-blue-500 rounded-md py-auto h-9 '
              >
                Liên kết
              </button>
            </div>

            <div className='flex justify-between flex-1 my-5'>
              <div className='flex'>
                <img
                  className='w-8 h-8 '
                  src='https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png'
                  alt=''
                ></img>
                <div className='my-auto ml-2'>Google</div>
              </div>
              <button
                type='button'
                className='w-20 text-blue-500 border border-blue-500 rounded-md h-9 '
              >
                Liên kết
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
