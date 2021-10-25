import Image from 'next/image'

const user = {
  name: 'Reinier Hernández',
  username: '@RagnarokReinier',
  imageUrl:
    'https://pbs.twimg.com/profile_images/1452697085745061889/_TKL0bmR_400x400.png',
}

export const Tweet = ({ text }) => {
  return (
    <div className="flex">
      <Image className="rounded-full" src={user.imageUrl} alt="" width='50px' height='50px' />
      <div className="ml-3 flex-grow">
        <div className="flex justify-between">
          <p className="font-bold">{user.name}</p>
          <p className="text-gray-500 font-light">{user.username}</p>
        </div>
        <p className={text ? '' : 'text-gray-400 font-light'}>
          {
            text
            ? text
            : 'Tu tweet aparecerá aquí'
          }
        </p>
      </div>
    </div>
  )
}