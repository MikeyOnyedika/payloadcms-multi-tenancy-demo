import LoadingCircle from "./LoadingCircle"

type Props = {
  disabled: boolean
}

export default function SubmitBtn({ disabled }: Props) {
  return (
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded-md text-white p-2" disabled={disabled}>
      {
        disabled ? (
          <LoadingCircle />
        ) : "submit"
      }
    </button>
  )
}
