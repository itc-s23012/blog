import parse from 'html-react-parser'
import Image from 'next/legacy/image'

const ConvertBody = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: node => {
      if (node.name === 'img') {
        const { src, alt, width, height } = node.attribs
        return (
          <Image
            layout='responsive'
            src={src}
            width={width}
            height={height}
            alt={alt}
            min-width={768}
          />
        )
      }
    }
  })
  return <>{contentReact}</>
}

export default ConvertBody
